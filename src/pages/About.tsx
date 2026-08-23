import styles from "./About.module.css";
import { Reveal } from "../components/Reveal";

const VALUES = [
  {
    title: "Hustle, from zero",
    body: "I built this career from nothing — a showroom floor in Goa to product leadership at Amazon. Hard work isn't a value statement, it's the whole method.",
  },
  {
    title: "Customer obsession",
    body: "Every roadmap decision gets run through one question: does this actually make a customer's life better, not just the metrics.",
  },
  {
    title: "Data-driven",
    body: "Instinct earns you a hypothesis. Data earns you the right to be sure. I try not to confuse the two.",
  },
  {
    title: "Empathy first",
    body: "For customers, for teams, for the person on the other side of a hard trade-off. It's the thing that scales trust.",
  },
];

const TIMELINE = [
  {
    year: "2025 —",
    role: "Senior Product Manager, DEX (Speed Innovation)",
    org: "Amazon",
    body: "Own the end-to-end Discovery CX charter for Amazon's Sub-Same Day delivery launch — Homepage, Search, Navigation, Personalization, and Recommendations — from vision through scale.",
  },
  {
    year: "2024",
    role: "Senior General Marketing Manager, Books",
    org: "Amazon",
    body: "Head of Marketing and Demand across Canada, Mexico, Australia, and India. Drove 25%+ topline growth to billion-dollar annual revenue across three consecutive years of category-leading growth.",
  },
  {
    year: "2023",
    role: "General Marketing Manager, Books",
    org: "Amazon",
    body: "Led lifecycle, onsite merchandising, and recommendations-led discovery. SME for the first-ever Amazon Books Sale in the US.",
  },
  {
    year: "2022",
    role: "Marketing Manager, Events & Lifecycle",
    org: "Amazon — Kindle Content India",
    body: "Started the Amazon journey in Bengaluru, owning lifecycle and events for Kindle Content.",
  },
  {
    year: "2020",
    role: "Customer Lifecycle Value & Growth, Sr. Specialist",
    org: "Maxis Postpaid",
    body: "Owned lifecycle strategy for ~3M postpaid customers, driving the lowest-ever churn on record and launching Malaysia's first family plan on a converged framework.",
  },
  {
    year: "2019",
    role: "Product Manager, Hotlink",
    org: "Maxis",
    body: "Led acquisition strategy for Malaysia's #1 prepaid brand — highest gross subscriber additions nationally during tenure.",
  },
  {
    year: "2018",
    role: "Marketing Manager",
    org: "IndiaFirst Life",
    body: "Built the consumer engagement portfolio from scratch, onboarding an omnichannel platform for data-led personalization in regulated financial services.",
  },
  {
    year: "2014",
    role: "Customer Value Manager → National Planning Lead",
    org: "Vodafone Idea",
    body: "Ran segmentation and lifecycle for Maharashtra & Goa, then took the Unlimited portfolio national — 2x segmented revenue, lowest-ever circle churn.",
  },
  {
    year: "2010",
    role: "Showroom Manager",
    org: "Honda Motorcycle & Scooter India",
    body: "Where it started. Ponda, Goa. Sold motorcycles, learned how customers actually decide.",
  },
];

export default function About() {
  return (
    <>
      <header className={`container ${styles.header}`}>
        <div>
          <p className="eyebrow">About</p>
          <h1 className={styles.title}>From a showroom in Goa to product leadership at Amazon.</h1>
        </div>
        <div className={styles.intro}>
          <p>
            I'm a Senior Product Manager, Technical at Amazon, and a product and growth leader
            with over a decade of experience building customer-centric experiences across
            global markets — from zero-to-one launches to billion-dollar-scale platforms.
          </p>
          <p>
            I wasn't the brilliant student. What got me here was hard work, hustle, and a
            refusal to stay where I started.
          </p>
        </div>
      </header>

      <section className={`container ${styles.values}`}>
        <Reveal>
          <p className="eyebrow">What drives the work</p>
        </Reveal>
        <div className={styles.valuesGrid}>
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className={styles.value}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`container ${styles.timelineSection}`}>
        <Reveal>
          <p className="eyebrow">The path here</p>
          <h2 className={styles.title} style={{ fontSize: "clamp(26px, 3.4vw, 38px)" }}>
            Career
          </h2>
        </Reveal>

        <div className={styles.timeline}>
          {TIMELINE.map((item, i) => (
            <Reveal key={item.role + item.year} delay={Math.min(i * 0.04, 0.4)}>
              <div className={styles.timeItem}>
                <div className={styles.timeYear}>{item.year}</div>
                <div className={styles.timeDot} />
                <div className={styles.timeContent}>
                  <div className={styles.timeRole}>{item.role}</div>
                  <div className={styles.timeOrg}>{item.org}</div>
                  <p className={styles.timeBody}>{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`container ${styles.causes}`}>
        <Reveal>
          <p className="eyebrow">Outside of work</p>
          <h2 className={styles.title} style={{ fontSize: "clamp(26px, 3.4vw, 38px)" }}>
            Causes I keep returning to
          </h2>
        </Reveal>

        <div className={styles.causesGrid}>
          <Reveal delay={0.05}>
            <div className={styles.causeCard}>
              <h3 className={styles.causeTitle}>Education</h3>
              <p className={styles.causeBody}>
                Mentorship and pro-bono visiting faculty engagements focused on practical,
                industry-relevant learning — expanding access to education and career
                opportunity for people who are starting the way I did.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={styles.causeCard}>
              <h3 className={styles.causeTitle}>Hunger</h3>
              <p className={styles.causeBody}>
                A cause close to home — supporting efforts that get food to people who need
                it, because I know what it means to build a life from nothing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
