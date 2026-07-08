"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { experienceData } from "@/constant";
import { ExperienceCard } from "../Cards";
import { nasalization } from "@/app/fonts";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      id="experience"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold text-primary`}
            variants={itemVariants}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-xs text-muted-foreground max-w-2xl mx-auto mt-4"
            variants={itemVariants}
          >
            My professional journey and key experiences
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - static, no animation */}
          <div
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent"
            style={{ height: `${experienceData.length * 200}px` }}
          />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${index}`}
                role={exp.role}
                year={exp.year}
                description={exp.description}
                company={exp.company}
                technologies={exp.technologies}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
