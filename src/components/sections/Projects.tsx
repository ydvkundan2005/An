"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { nasalization } from "@/app/fonts";

import { ProjectCard } from "../Cards";
import { projectsData } from "@/constant/";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="mx-auto px-4 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2
            className={`${nasalization.className} text-4xl md:text-5xl font-bold text-primary`}
          >
            My Projects
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projectsData.map((proj, index) => (
            <ProjectCard
              key={proj.name}
              index={index}
              title={proj.name}
              desc={proj.description}
              github={proj.github_link}
              demo={proj.demo}
              tech={proj.tech}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
