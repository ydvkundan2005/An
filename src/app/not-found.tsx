"use client";

import { useRouter, usePathname } from "next/navigation";
import { motion } from "motion/react";

import Link from "next/link";

import { FaHouse, FaArrowLeft } from "react-icons/fa6";

import { Navbar, Footer } from "@/components/common";
import { Button } from "@/components/ui/button";
import { quentine, nasalization } from "@/app/fonts";

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
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl mx-auto w-full text-center">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <h1
                className={`${quentine.className} text-7xl md:text-9xl lg:text-[10rem] font-bold text-primary leading-none`}
              >
                404
              </h1>
              <h2
                className={`${nasalization.className} text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground`}
              >
                Page Not Found
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <p className="text-xs md:text-xl text-primary-foreground/80 leading-relaxed">
                Oops! The page you&apos;re looking for seems to have wandered
                off into the digital void.
              </p>

              <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
                <p className="text-base text-primary-foreground/70">
                  Requested URL:
                </p>
                <code className="mt-2 inline-block px-4 py-2 bg-primary/20 rounded-lg text-primary font-mono text-sm break-all">
                  {pathname}
                </code>
              </div>

              <p className="text-base text-primary-foreground/60">
                The page might have been moved, deleted, or the URL might be
                incorrect.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={itemVariants}
            >
              <Button
                onClick={() => router.push("/")}
                size="lg"
                className="bg-primary hover:bg-primary/90 relative group overflow-hidden min-w-[180px] h-12 text-lg"
              >
                <FaHouse className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Go Home</span>
              </Button>

              <Button
                onClick={() => router.back()}
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary-foreground hover:bg-primary/10 min-w-[180px] h-12 text-lg"
              >
                <FaArrowLeft className="w-5 h-5 mr-3" />
                Go Back
              </Button>
            </motion.div>

            <motion.div className="pt-8" variants={itemVariants}>
              <p className="text-base text-primary-foreground/60 mb-6">
                Or explore these sections:
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-base">
                {[
                  { href: "/#about", label: "About" },
                  { href: "/#projects", label: "Projects" },
                  { href: "/#skills", label: "Skills" },
                  { href: "/#experience", label: "Experience" },
                  { href: "/resume", label: "Resume" },
                  { href: "/#contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-primary hover:text-primary/80 transition-colors duration-200 hover:scale-105 inline-block px-3 py-1 rounded-lg hover:bg-primary/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
