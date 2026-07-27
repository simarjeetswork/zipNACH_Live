import AnimatedText from "@/lib/gsap/animations/AnimateText";
import React from "react";

interface ChipProps {
  label: string;
}

function Chip({ label }: ChipProps) {
  return (
    <AnimatedText
      as="p"
      className="text-blue text-start text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-7"
    >
      <span className="text-sm font-semibold uppercase text-[var(--border-blue)]">
        {label}
      </span>
    </AnimatedText>
  );
}

export default Chip;