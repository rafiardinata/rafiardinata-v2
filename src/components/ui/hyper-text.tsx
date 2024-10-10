"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface HyperTextProps {
  phrases: string[]; // Multiple phrases
  duration?: number;
  framerProps?: Variants;
  className?: string;
  animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
  phrases,
  duration = 3500,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className,
  animateOnLoad = true,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(phrases[0].split(""));
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const iterations = useRef(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animateOnLoad && isFirstRender.current) {
        clearInterval(interval);
        isFirstRender.current = false;
        return;
      }

      if (iterations.current < phrases[currentPhraseIndex].length) {
        setDisplayText((t) =>
          t.map((l, i) =>
            l === " "
              ? l
              : i <= iterations.current
              ? phrases[currentPhraseIndex][i]
              : alphabets[getRandomInt(26)],
          ),
        );
        iterations.current = iterations.current + 0.1;
      } else {
        // Move to the next phrase
        const nextIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(() => {
          setCurrentPhraseIndex(nextIndex);
          setDisplayText(phrases[nextIndex].split(""));
          iterations.current = 0; // Reset iterations for the new phrase
        }, 200); // Optional delay for smooth transition
        clearInterval(interval);
      }
    }, duration / (phrases[currentPhraseIndex].length * 10));

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [currentPhraseIndex, phrases, duration, animateOnLoad]);

  return (
    <div className="overflow-hidden py-2 flex cursor-default">
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.h1
            key={i}
            className={cn("font-mono", letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
