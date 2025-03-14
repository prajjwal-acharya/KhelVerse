"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5 }) => {
  const [scope, animate] = useAnimate();

  // Split paragraphs by new lines
  const lines = words.split("\n");

  useEffect(() => {
    animate("span", { opacity: 1, filter: filter ? "blur(0px)" : "none" }, { duration, delay: stagger(0.2) });
  }, [scope.current]);

  const renderLines = () => {
    return lines.map((line, lineIdx) => (
      <div key={lineIdx} className="mb-4">
        {line.split(/\s+/).map((word, wordIdx, array) => (
          <motion.span
            key={word + wordIdx}
            className="dark:text-white text-black text-xl opacity-0 inline-block"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}
            {wordIdx !== array.length - 1 && "\u00A0"} {/* Preserve spacing */}
          </motion.span>
        ))}
      </div>
    ));
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          <motion.div ref={scope}>{renderLines()}</motion.div>
        </div>
      </div>
    </div>
  );
};
