import React from "react";
import GetToKnow from "../components/GetToKnow";
import CTABanner from "../components/CTABanner";
import MissionVision from "../components/MissionVision";
import StorySection from "../components/StorySection";
import TeamSection from "../components/TeamSection";

const Strategy = () => {
  return (
    <div className="min-h-screen">
      <GetToKnow />
      <CTABanner />
      <MissionVision />
      <StorySection />
      <TeamSection />
    </div>
  );
};

export default Strategy;