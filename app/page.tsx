import { GradientWrapper } from "@/components/layout/GradientWrapper";
import HeroPremium from "@/components/sections/HeroPremium";
import ServicesPremium from "@/components/sections/ServicesPremium";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import StatsPremium from "@/components/sections/StatsPremium";
import { ProofSection } from "@/components/sections/ProofSection";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import CTAPremium from "@/components/sections/CTAPremium";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { targetAudiences } from "@/data/whoWeHelp";
import { processSteps } from "@/data/howWeWork";
import { testimonials } from "@/data/testimonials";
import { caseStudies } from "@/data/caseStudies";
import styles from "./home.module.css";

const clientLogos = [
  { name: "Aboitiz", src: "/placeholders/aboitiz-logo.png" },
  { name: "Advanz Pharma", src: "/placeholders/advanzpharma-logo.png" },
  { name: "Averis", src: "/placeholders/averis-logo.png" },
  { name: "CLSA", src: "/placeholders/clsa-logo.png" },
  { name: "Globe", src: "/placeholders/globe-logo.png" },
  { name: "Manila Water", src: "/placeholders/manilawater-logo.png" },
  { name: "Mitsubishi Electric", src: "/placeholders/mitsubishielectric-logo.png" },
  { name: "NBF", src: "/placeholders/nbf-logo.webp" },
  { name: "Otto", src: "/placeholders/otto-logo.png" },
  { name: "PA Media Group", src: "/placeholders/pamediagroup-logo.png" },
  { name: "PIDG", src: "/placeholders/pidg-logo.png" },
  { name: "Saudi Electricity Company", src: "/placeholders/saudielectricitycompany-logo.png" },
  { name: "Standard Chartered", src: "/placeholders/standardchartered.png" },
  { name: "TAQA", src: "/placeholders/taqa-logo.png" },
  { name: "UCT", src: "/placeholders/uct-logo.png" },
];

export default function Home() {
  return (
    <GradientWrapper>
      <HeroPremium />
      
      {/* What We Do / Intro Video Section */}
      <section className={styles.whatWeDo}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.grid}>
              {/* Text Content */}
              <div className={styles.textContent}>
                {/* <span className={styles.sectionBadge}>Company Overview</span> */}
                <h2 className={styles.title}>What We Do</h2>
                <p className={styles.description}>
                  At SSR Fintech, we specialize in transforming complex financial challenges into
                  streamlined, scalable solutions. Our expert team combines deep industry knowledge
                  with cutting-edge technology to help financial institutions navigate regulatory
                  compliance and accelerate digital transformation.
                </p>
                {/* <ul className={styles.highlights}>
                  <li className={styles.highlight}>
                    <CheckCircle2 className={styles.highlightIcon} />
                    <span>SAP FICO &amp; ERP implementations for financial institutions</span>
                  </li>
                  <li className={styles.highlight}>
                    <CheckCircle2 className={styles.highlightIcon} />
                    <span>Regulatory compliance consulting and digital transformation</span>
                  </li>
                  <li className={styles.highlight}>
                    <CheckCircle2 className={styles.highlightIcon} />
                    <span>End-to-end fintech product development and managed services</span>
                  </li>
                </ul> */}
                <Link href="/about" className={styles.learnMoreLink}>
                  Learn About SSR Fintech
                  <ArrowRight className={styles.arrowIcon} />
                </Link>
              </div>

              {/* Video Container */}
              <div className={styles.videoWrapper}>
                <div className={styles.videoContainer}>
                  <video
                    className={styles.videoElement}
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src="/ssrFintechIntro.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Decorative Elements */}
                <div className={styles.decorTop} />
                <div className={styles.decorBottom} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhoWeHelp
        audiences={targetAudiences}
        title="Who We Help"
        description="Trusted by leading financial institutions and innovative fintech startups"
      />
      
      <ServicesPremium />
      
      <ProcessSteps
        steps={processSteps}
        title="How We Work"
        description="A proven methodology that delivers results every time"
      />
      
      <StatsPremium />
      
      <ProofSection
        testimonials={testimonials}
        title="Client Success Stories"
        description="Real results from real clients—see the impact we deliver"
      />

      <section className={styles.clientLogosSection}>
        <div className={styles.container}>
          <div className={styles.logosHeader}>
            <h2 className={styles.logosTitle}>Trusted by Leading Enterprises</h2>
            <p className={styles.logosDescription}>
              Our teams have delivered measurable impact for global brands across industries
            </p>
          </div>
          <div className={styles.logoMarquee}>
            <div className={styles.logoTrack}>
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <div className={styles.logoItem} key={`${logo.name}-${index}`}>
                  <img src={logo.src} alt={`${logo.name} logo`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.caseStudiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Success Stories</span>
            <h2 className={styles.sectionTitle}>Proven Results Across Industries</h2>
            <p className={styles.sectionDescription}>
              See how we&apos;ve helped leading organizations transform their financial planning and analytics
            </p>
          </div>
          <CaseStudiesGrid caseStudies={caseStudies} showCount={3} />
          
          <div className={styles.viewAllContainer}>
            <Link href="/case-studies" className={styles.viewAllButton}>
              View All Success Stories
              <ArrowRight className={styles.viewAllIcon} size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      <CTAPremium />
    </GradientWrapper>
  );
}

