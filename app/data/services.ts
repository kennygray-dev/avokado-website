/**
 * Single source of truth for services — read by the nav dropdown and the
 * /services accordion. Consolidated into a handful of broad disciplines rather
 * than splitting closely-related work (photo/video, web dev/design) apart.
 */

export type ServiceGroup = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "brand",
    title: "Brand Identity",
    summary:
      "The identity underneath everything else: how your brand looks, sounds, and holds together across every surface.",
    items: ["Logo & Identity", "Brand Strategy", "Guidelines", "Art Direction"],
  },
  {
    id: "visual",
    title: "Visual Production",
    summary:
      "Photography and film shot to your brand's direction — from product and portraits to campaigns and social-native edits.",
    items: ["Photography", "Videography", "Product Shoots", "Editing & Post"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    summary:
      "Content and social that keeps the brand consistent between campaigns, not just during them — planned, made, and measured.",
    items: ["Social Media", "Content Creation", "Campaigns", "Community Growth"],
  },
  {
    id: "web",
    title: "Web & Digital",
    summary:
      "Sites and products designed and built to load fast, read clearly, and convert — from a landing page to a full store.",
    items: ["Websites", "E-Commerce", "Web Apps", "Shopify & Webflow"],
  },
  {
    id: "ai",
    title: "AI Creative",
    summary:
      "AI-assisted video and imagery for brands that want to move fast without losing craft.",
    items: ["AI Video", "AI Product Images", "AI Campaigns"],
  },
];

export const serviceCategories = serviceGroups.map((g) => g.title);
