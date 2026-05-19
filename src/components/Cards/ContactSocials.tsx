import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "motion/react";

import { SiLeetcode } from "react-icons/si";
import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

import { selfData } from "@/constant";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const ContactSocials = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      link: `https://github.com/${selfData.socials_username.github}`,
    },
    {
      Icon: FaLinkedinIn,
      link: `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
    },
    {
      Icon: PiTelegramLogo,
      link: `https://t.me/${selfData.socials_username.telegram}`,
    },
    {
      Icon: FaTwitter,
      link: `https://twitter.com/${selfData.socials_username.twitter}`,
    },
    {
      Icon: SiLeetcode,
      link: `https://leetcode.com/${selfData.socials_username.leetcode}`,
    },
  ];

  return (
    <motion.ul
      className="flex mt-12 space-x-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {socialLinks.map((social, index) => (
        <ContactSocialItem key={index} Icon={social.Icon} link={social.link} />
      ))}
    </motion.ul>
  );
};

const ContactSocialItem = ({
  Icon,
  link,
}: {
  Icon: IconType;
  link: string;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
      className="bg-purple-700 text-slate-300 hover:bg-slate-400 hover:text-purple-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Icon className="text-slate-300 hover:text-purple-700 w-6 h-6" />
      </Link>
    </motion.li>
  );
};
