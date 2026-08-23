export type Musing = {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO
  tag: "Product" | "Growth" | "Career" | "Life";
  minutes: number;
  body: string[]; // paragraphs — replace with your real writing
};

// Placeholder entries so the page and reader view work end to end.
// Swap the title/dek/body for your real essays — the layout, tags, and
// reading-time all just work off whatever you put here.
export const musings: Musing[] = [
  {
    slug: "customer-obsession-is-a-discipline-not-a-slogan",
    title: "Customer obsession is a discipline, not a slogan",
    dek: "Everyone says it. Almost no one builds the mechanisms that make it true when the roadmap gets hard.",
    date: "2026-07-14",
    tag: "Product",
    minutes: 6,
    body: [
      "This is placeholder body copy — replace it with your actual essay text in src/data/musings.ts.",
      "A good structure for this piece: open with a specific moment where the obsession was tested, not the definition of the term itself.",
      "Then get concrete — the mechanism, the metric, the trade-off you made and why.",
    ],
  },
  {
    slug: "shipping-at-amazon-speed-without-losing-the-plot",
    title: "Shipping at Amazon speed without losing the plot",
    dek: "Notes on scaling a net-new delivery promise to millions of customers without letting velocity eat quality.",
    date: "2026-06-02",
    tag: "Growth",
    minutes: 8,
    body: [
      "Placeholder — replace with your real writing on speed vs. rigor, expansion mechanics, or whatever this piece is actually about.",
    ],
  },
  {
    slug: "what-a-showroom-floor-taught-me-about-product",
    title: "What a showroom floor taught me about product",
    dek: "Before roadmaps and PRDs, I sold motorcycles in Goa. Some lessons never left.",
    date: "2026-04-19",
    tag: "Career",
    minutes: 5,
    body: [
      "Placeholder — this is a good slot for the origin-story piece: showroom manager to Sr. PM Technical at Amazon, told through specifics rather than a resume summary.",
    ],
  },
  {
    slug: "why-i-teach",
    title: "Why I teach",
    dek: "On mentorship, visiting faculty work, and why education is the cause I keep returning to.",
    date: "2026-02-11",
    tag: "Life",
    minutes: 4,
    body: [
      "Placeholder — a natural home for your thinking on education access, mentorship, and the pro-bono faculty work mentioned in your background.",
    ],
  },
];
