"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";

const getDurationText = (startDate: Date, endDate: Date | "Present"): string => {
  const start = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const end =
    typeof endDate === "string"
      ? "Present"
      : new Date(endDate).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
  return `${start} — ${end}`;
};

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="w-full rounded-2xl border bg-background overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 border-b bg-muted/40">
        <div className="flex items-center gap-4">
          {experience.logo && (
            <div className="w-14 h-14 rounded-xl border-2 border-border overflow-hidden bg-white flex-shrink-0 shadow-sm">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={56}
                height={56}
                className="w-full h-full object-contain p-1.5"
              />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-foreground">
                {experience.position}
              </h3>
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icons.externalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {experience.company} &nbsp;·&nbsp; {experience.location}
            </p>
          </div>
        </div>
        <span className="self-start sm:self-auto inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
          {getDurationText(experience.startDate, experience.endDate)}
        </span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Responsibilities */}
        <div className="px-6 py-5">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Responsibilities
          </h4>
          <ul className="space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="px-6 py-5">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.slice(0, 4).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 border-t bg-muted/20">
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
        <Button variant="outline" size="sm" className="rounded-lg self-end sm:self-auto flex-shrink-0" asChild>
          <Link href={`/experience/${experience.id}`}>
            View Details
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExperienceCard;
