"use client";

import { nasalization } from "@/app/fonts";
import { selfData } from "@/constant";
import { motion, AnimatePresence } from "motion/react";
import { FC, useState, useEffect } from "react";
import { Background } from "./Background";

interface H1ComponentProps {
  name: string;
  y_initialValue: number;
}

const H1_Component: FC<H1ComponentProps> = ({ name, y_initialValue }) => {
  return (
    <motion.h1
      initial={{ y: y_initialValue, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`text-slate-200 text-4xl ${nasalization.className}`}
      aria-hidden="true"
    >
      {name}
    </motion.h1>
  );
};

export const PreLoaderOverlay = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="overflow-x-hidden w-full h-screen fixed inset-0 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="flex items-center justify-center fixed h-full w-full">
            <Background />

            <motion.div
              className="flex justify-center items-center tracking-widest mx-auto container text-2xl text-slate-400"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <H1_Component name={selfData.first_name} y_initialValue={40} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-2"
              >
                /
              </motion.span>
              <H1_Component name={selfData.last_name} y_initialValue={-40} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
