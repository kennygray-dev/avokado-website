import { NextResponse } from "next/server";

/**
 * Receives both the general contact form and the "start a project" form and
 * emails them on. Previously neither form submitted anywhere — every enquiry
 * typed into the site was silently discarded.
 *
 * Requires in .env.local:
 *   RESEND_API_KEY=re_...
 *   ENQUIRY_TO=avokado.ng@gmail.com
 *   ENQUIRY_FROM=Avokado <enquiries@avokado.ng>   # must be a verified domain
 */

const MAX_FIELD = 5000;

type Payload = Record<string, string | undefined>;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const kind = clean(body.kind) === "project" ? "project" : "contact";
  const name = clean(body.name);
  const email = clean(body.email);

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please provide your name and email." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  const fields: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Phone", clean(body.phone)],
    ["Subject", clean(body.subject)],
    ["Budget", clean(body.budget)],
    ["Services", clean(body.services)],
    ["Message", clean(body.message)],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[enquiry] RESEND_API_KEY is not set — enquiry not delivered:", fields);
    return NextResponse.json(
      { error: "We couldn't send that right now. Please email avokado.ng@gmail.com." },
      { status: 500 },
    );
  }

  const html = `
    <h2>New ${kind === "project" ? "project enquiry" : "contact message"}</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><td style="vertical-align:top"><strong>${label}</strong></td><td>${escapeHtml(
              value,
            ).replace(/\n/g, "<br>")}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM ?? "Avokado <onboarding@resend.dev>",
      to: [process.env.ENQUIRY_TO ?? "avokado.ng@gmail.com"],
      reply_to: email,
      subject:
        kind === "project"
          ? `New project enquiry — ${name}`
          : `New message from ${name}`,
      html,
    }),
  });

  if (!response.ok) {
    console.error("[enquiry] Resend rejected the send:", await response.text());
    return NextResponse.json(
      { error: "We couldn't send that right now. Please email avokado.ng@gmail.com." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
