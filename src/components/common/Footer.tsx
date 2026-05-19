"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";

import { quentine } from "@/app/fonts";
import { selfData } from "@/constant/";
import spaceImg from "@/assets/images/space.png";

export const Footer = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const toggleHeart = () => setIsHeartFilled(!isHeartFilled);

  const socialLinks = [
    {
      icon: LuGithub,
      href: `https://github.com/${selfData.socials_username.github}`,
      label: "GitHub",
    },
    {
      icon: LuLinkedin,
      href: `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      label: "LinkedIn",
    },
    {
      icon: LuTwitter,
      href: `https://twitter.com/${selfData.socials_username.twitter}`,
      label: "Twitter",
    },
    { icon: LuMail, href: `mailto:${selfData.email}`, label: "Email" },
  ];

  return (
    <footer className="relative bg-background/10 backdrop-blur-md border-t border-border/50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${spaceImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-background/30" />

      {/* Static decorative elements - no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full">
        <div
          className="absolute -top-4 -right-4 sm:-top-10 sm:-right-10 md:-top-20 md:-right-20 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 rounded-full opacity-10 max-w-full max-h-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-4 -left-4 sm:-bottom-10 sm:-left-10 md:-bottom-20 md:-left-20 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 rounded-full opacity-10 max-w-full max-h-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-6 py-6 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <motion.span
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.15 }}
            >
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                loading="lazy"
                sizes="40px"
                className="w-10 h-10 object-contain bg-transparent border border-primary/90 p-1.5 rounded-xl shadow-lg"
              />
            </motion.span>
            <h3
              className={`${quentine.className} text-2xl font-semibold text-primary`}
            >
              Aarab Nishchal
            </h3>
          </div>

          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-primary/30 bg-card/50 hover:bg-primary/10 hover:text-primary text-muted-foreground transition-colors duration-200"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

        <div className="text-xs text-center text-muted-foreground space-y-2">
          <p className="flex items-center justify-center gap-2">
            Made with
            <button onClick={toggleHeart} className="text-primary" aria-label="Toggle heart">
              {isHeartFilled ? <TbHeartFilled /> : <TbHeart />}
            </button>
            by
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-primary/80 hover:text-primary transition-colors duration-200"
            >
              Aarab Nishchal
            </button>
          </p>
          <span>Licensed under MIT</span>
        </div>
      </div>
    </footer>
  );
};
