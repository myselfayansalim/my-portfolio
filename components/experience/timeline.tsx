"use client";

import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import ExperienceCard from "@/components/experience/experience-card";
import { ExperienceInterface } from "@/config/experience";

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="space-y-6">
      {sortedExperiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          delay={0.1 * (index + 1)}
          direction="up"
        >
          <ExperienceCard experience={experience} />
        </AnimatedSection>
      ))}
    </div>
  );
};

export default Timeline;
