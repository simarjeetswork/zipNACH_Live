import AnimatedText from "@/lib/gsap/animations/AnimateText";
import React from "react";

interface ChipProps {
  label: string;
  textColor?: string;
}

function Chip({
  label,
  textColor = "var(--border-blue)",
}: ChipProps) {
  return (
    <AnimatedText
      as="p"
      className="text-start text-sm uppercase font-mono font-normal bg-chip inline-block px-4 py-1 mb-7 rounded-2xl"
    >
      <span
        className="text-sm font-regular uppercase"
        style={{ color: textColor }}
      >
        {label}
      </span>
    </AnimatedText>
  );
}

export default Chip;