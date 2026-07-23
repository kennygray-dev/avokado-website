"use client";

import { useState } from "react";

export type EnquiryStatus = "idle" | "sending" | "sent" | "error";

/**
 * Shared submit logic for both enquiry forms, so ContactForm and
 * StartProjectForm can't drift apart in how they validate or report failure.
 */
export function useEnquiry(kind: "contact" | "project") {
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setError(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  return { status, error, submit };
}
