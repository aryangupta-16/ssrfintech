"use client";

import { GradientWrapper } from "@/components/layout/GradientWrapper";
import { PageHero } from "@/components/sections/PageHero";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import { caseStudies } from "@/data/caseStudies";
import { Award } from "lucide-react";
import styles from "./case-studies.module.css";

export default function CaseStudiesPage() {
  return (
    <GradientWrapper>
      <PageHero
        title="Success Stories"
        description="Real results for real clients — see how we've transformed businesses across industries"
        backgroundImage="/businessman-using-tablet-with-digital-graphics.jpg"
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        icon={<Award className="w-10 h-10" />}
      />

      <section className={styles.caseStudies}>
        <div className={styles.container}>
          <CaseStudiesGrid caseStudies={caseStudies} />
        </div>
      </section>
    </GradientWrapper>
  );
}
