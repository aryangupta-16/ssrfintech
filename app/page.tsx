import { GradientWrapper } from "@/components/layout/GradientWrapper";
import HeroPremium from "@/components/sections/HeroPremium";
import ServicesPremium from "@/components/sections/ServicesPremium";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import StatsPremium from "@/components/sections/StatsPremium";
import { ProofSection } from "@/components/sections/ProofSection";
import CTAPremium from "@/components/sections/CTAPremium";

import { targetAudiences } from "@/data/whoWeHelp";
import { processSteps } from "@/data/howWeWork";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <GradientWrapper>
      <HeroPremium />
      
      {/* What We Do Video Section */}
      <section className="py-20 relative bg-[var(--bg-section)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                  What We Do
                </h2>
                <p className="text-lg text-[var(--text-primary)] leading-relaxed">
                  At SSR Fintech, we specialize in transforming complex financial challenges into streamlined, 
                  scalable solutions. Our expert team combines deep industry knowledge with cutting-edge 
                  technology to help financial institutions and fintech startups navigate regulatory compliance, 
                  optimize operations, and accelerate digital transformation.
                </p>
                <p className="text-[var(--text-secondary)]">
                  From strategic consulting to hands-on implementation, we partner with you to build 
                  robust financial systems that drive growth and innovation.
                </p>
              </div>

              {/* Video Container */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[var(--bg-card)] backdrop-blur-sm border border-[var(--border-color)]">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/EHrxlZNRHrk?rel=1&modestbranding=1"
                      title="What We Do - SSR Fintech"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--color-accent)]/10 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl -z-10" />
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
      
      <CTAPremium />
    </GradientWrapper>
  );
}

