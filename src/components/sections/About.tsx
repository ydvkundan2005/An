"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant";
import Link from "next/link";
import { LuMapPinned } from "react-icons/lu";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative group w-full"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="w-full max-w-md h-80 rounded-2xl overflow-hidden relative border-2 group/image"
                style={{ borderColor: "hsl(var(--glass-border))" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/me.png"
                    alt="Profile Picture"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover transition-all duration-500 ease-out filter grayscale group-hover/image:grayscale-0 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h2
                className={`${nasalization.className} text-4xl md:text-5xl font-bold relative`}
                style={{ color: "hsl(var(--primary))" }}
              >
                About Me
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6 leading-relaxed"
              style={{ color: "hsl(var(--foreground) / 0.8)" }}
              variants={itemVariants}
            >
              {selfData.about.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-xs hover:text-primary-foreground transition-colors duration-200"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-sm"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={`https://www.google.com/maps/place/${selfData.current_location.city}+${selfData.current_location.state}+${selfData.current_location.country}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 hover:border-primary/50 group transition-all duration-300"
                >
                  <LuMapPinned
                    className="w-4 h-4 transition-colors group-hover:scale-110"
                    style={{ color: "hsl(var(--primary))" }}
                  />
                  <span
                    className="transition-colors"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {selfData.current_location.city},{" "}
                    {selfData.current_location.state}
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
