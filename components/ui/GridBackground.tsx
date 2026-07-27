import clsx from "clsx";
import React from "react";

interface GridBackgroundProps {
  className?: string;
}

export default function GridBackground({
  className = "",
}: GridBackgroundProps) {
  return (
    <div
      className={clsx(
        "absolute inset-0 top-[-12px] -z-1 overflow-hidden",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(92,143,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(92,143,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Left glow */}
      <div
        className="absolute left-[-20%] top-[-15%] h-[900px] w-[900px]"
        style={{
          background:
            "radial-gradient(circle, rgba(88,128,255,.18) 0%, rgba(88,128,255,.08) 40%, transparent 75%)",
        }}
      />

      {/* Top right fade */}
      <div
        className="absolute right-0 top-0 h-[500px] w-[500px]"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(114,164,255,.14), transparent 75%)",
        }}
      />
    </div>
  );
}