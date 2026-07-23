export type Stat = { value: string; label: string };

export type Project = {
  id: number;
  /** Display order in the work index (1 = first). */
  order: number;
  /** Short client name used in the card metadata. */
  client: string;
  /** 2–3 letter monogram used as a stand-in client mark. */
  monogram: string;
  title: string;
  /** Short one-liner shown on the card. */
  summary: string;
  /** Longer description, kept for detail views. */
  description: string;
  /** Coarse buckets driving the filter row. */
  categories: string[];
  /** Service tags shown on the card. */
  services: string[];
  /**
   * Outcome stats. PLACEHOLDER VALUES — replace with real client figures, or
   * leave empty ([]) for a project where there is no honest number to show;
   * the card simply drops the stat row in that case.
   */
  stats: Stat[];
  year: number;
  imageUrl: string;
  link: string | null;
};

const rawProjects: Project[] = [
  {
    id: 1,
    order: 2,
    client: "Tender Hearts",
    monogram: "TH",
    title: "Tender Hearts Charity Organization",
    summary: "A trust-first identity and website for a charity that lives on donations.",
    description:
      "A complete identity and digital presence for a charity that needed donors to trust it at a glance. We built the logo and brand system, then designed and developed the website around clear giving pathways.",
    categories: ["Branding", "Web Design"],
    services: ["Branding", "Website Design", "Development"],
    stats: [
      { value: "+2.4×", label: "Donations" },
      { value: "6 wk", label: "Build" },
      { value: "100%", label: "Custom" },
    ],
    year: 2025,
    // Live capture of the site we built (thum.io screenshot, stored locally).
    imageUrl: "/images/tenderheart-live.png",
    link: "https://www.tenderheartcharity.org/",
  },
  {
    id: 2,
    order: 4,
    client: "Ubuntu Pitch",
    monogram: "UP",
    title: "Ubuntu Pitch",
    summary: "Brand identity plus an ongoing content engine across every channel.",
    description:
      "Brand identity and an ongoing content engine. We shaped the logo and visual language, then handled video editing and social media management to keep the story consistent across every channel.",
    categories: ["Branding", "Video", "Social"],
    services: ["Branding", "Video Editing", "Social"],
    stats: [
      { value: "40+", label: "Posts / mo" },
      { value: "3×", label: "Reach" },
      { value: "1", label: "Brand voice" },
    ],
    year: 2025,
    imageUrl: "/images/ubuntu.png",
    link: null,
  },
  {
    id: 3,
    order: 1,
    client: "Awasource",
    monogram: "AW",
    title: "Awasource",
    summary: "A product platform, its launch campaign, and the content that carried it.",
    description:
      "We contributed to web application development, shooting and designing ad videos and flyers, and handled marketing and social media posting.",
    categories: ["Web Design", "Video", "Social"],
    services: ["Web App", "Ad Production", "Marketing"],
    stats: [
      { value: "1", label: "Platform" },
      { value: "12", label: "Ad spots" },
      { value: "5×", label: "Engagement" },
    ],
    year: 2026,
    // Live capture of the site we built (thum.io screenshot, stored locally).
    imageUrl: "/images/awasource-live.png",
    link: "https://www.awasource.com/",
  },
  {
    id: 4,
    order: 3,
    client: "Ehen Studios",
    monogram: "EH",
    title: "Ehen Studios",
    summary: "A studio brand built for the camera, on screen and on set.",
    description:
      "A studio brand built for the camera. We developed the logo and identity system, then produced the video and content that carries it — so the brand looks the same whether you meet it on a screen or on set.",
    categories: ["Branding", "Video"],
    services: ["Branding", "Video & Content"],
    stats: [
      { value: "20+", label: "Assets" },
      { value: "1", label: "Identity" },
      { value: "2 wk", label: "Turnaround" },
    ],
    year: 2025,
    imageUrl: "/images/ehen.png",
    link: null,
  },
];

/** Ordered for display: Awasource, Tender Hearts, Ehen Studios, Ubuntu Pitch. */
export const projectHighlights = [...rawProjects].sort((a, b) => a.order - b.order);

export const projectCategories = [
  "All",
  ...Array.from(new Set(projectHighlights.flatMap((p) => p.categories))),
];
