// SkillsCard.tsx
"use client";

import { motion } from "motion/react";

export const SkillCard = ({
  title,
  Icon,
  color,
  className,
}: {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  className?: string;
}) => {
  return (
    <motion.div
      className={`${className} flex flex-row items-center justify-center gap-4 grayscale-[90%] hover:grayscale-0 transition-all duration-200 px-3 py-1 w-fit h-fit group`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.15 }}
    >
      <div className="h-8 w-8 flex items-center justify-center flex-shrink-0">
        <Icon
          className="w-6 h-6 text-gray-400 transition-colors duration-200"
          style={{ color: color }}
        />
      </div>
      <small className="text-sm text-secondry font-semibold group-hover:text-primary-foreground/90 transition-colors duration-200">
        {title}
      </small>
    </motion.div>
  );
};
