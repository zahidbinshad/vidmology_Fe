/**
 * Marketing landing page composition.
 * Each major block lives in `src/components/landing` for clarity and reuse.
 */

import {
  LandingNavbar,
  HeroSection,
  DataIntoLearningSection,
  LatestOfferingsSection,
  RecruitmentCoachSection,
  MeasuringGrowthSection,
  LevelUpCareerCtaSection,
  HowItWorksSection,
  PracticeScenariosSection,
  BuildSkillQuicklySection,
  TestimonialSection,
  ComparisonSection,
  BoostCareerSection,
  FaqSection,
  FinalCtaSection,
  LandingFooter,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main className="flex-grow-1">
        <HeroSection />
        <DataIntoLearningSection />
        <LatestOfferingsSection />
        <RecruitmentCoachSection />
        <MeasuringGrowthSection />
        <LevelUpCareerCtaSection />
        <HowItWorksSection />
        <PracticeScenariosSection />
        <BuildSkillQuicklySection />
        <TestimonialSection />
        <ComparisonSection />
        <BoostCareerSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <LandingFooter />
    </>
  );
}
