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

