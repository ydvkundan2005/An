import { FC, useRef } from "react";
import { motion, useInView } from "motion/react";

import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  index: number;
  title: string;
  desc: string;
  github: string;
  demo?: string;
  tech: string[];
}

export const ProjectCard: FC<ProjectCardProps> = ({
  index,
  title,
  desc,
  github,
  demo,
  tech,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="group h-full"
    >
      <Card
        className="relative overflow-hidden backdrop-blur-xl border transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl rounded-2xl"
        style={{
          background: "hsl(var(--glass-bg))",
          borderColor: "hsl(var(--glass-border))",
          borderRadius: "1rem",
        }}
      >
        <div className="relative z-10 p-4 flex flex-col flex-grow">
          {/* Card Header */}
          <h3
            className="text-xl font-bold mb-3 mt-2 font-nasalization"
            style={{ color: "hsl(var(--primary))" }}
          >
            {title}
          </h3>

          <p
            className="text-sm mb-6 flex-grow font-inter leading-relaxed"
            style={{ color: "hsl(var(--foreground) / 0.8)" }}
          >
            {desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techItem) => (
              <Badge
                key={techItem}
                variant="outline"
                className="text-xs transition-colors duration-200 font-mono px-3 py-1 hover:bg-primary/10"
                style={{
                  borderColor: "hsl(var(--primary) / 0.3)",
                  color: "hsl(var(--foreground) / 0.9)",
                  backgroundColor: "hsl(var(--primary) / 0.1)",
                  borderRadius: "0.5rem",
                }}
              >
                {techItem}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-auto">
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full transition-colors duration-200 font-mono text-xs"
                style={{
                  backgroundColor: "hsl(var(--glass-bg-light))",
                  borderColor: "hsl(var(--glass-border))",
                  color: "hsl(var(--foreground))",
                  borderRadius: "0.5rem",
                }}
                asChild
              >
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </motion.div>
            {demo && (
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-colors duration-200 font-mono text-xs"
                  style={{ borderRadius: "0.5rem" }}
                  asChild
                >
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
