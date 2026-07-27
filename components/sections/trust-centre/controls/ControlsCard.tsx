import { Shield } from "lucide-react";
import { ControlSection } from "./types";

interface Props {
  section: ControlSection;
}

export default function ControlsCard({ section }: Props) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <h3 className="mb-3 text-xl font-medium text-[#000000CC]">
        {section.title}
      </h3>

      <div className="overflow-hidden rounded-sm border border-[#E5E7EB] bg-white">
        {/* Header */}
        <div className="grid grid-cols-[1fr_80px] border-b border-[#E5E7EB] bg-[#F8F9FB] px-4 py-4">
          <span className="text-sm font-semibold uppercase text-[#000000CC]">
            Control
          </span>

          <span className="text-right text-sm font-semibold uppercase text-[#000000CC]">
            Status
          </span>
        </div>

        {/* Rows */}
        {section.controls.map((control, index) => (
          <div
            key={control.title}
            className={`grid grid-cols-[1fr_80px] px-4 py-4 ${
              index !== section.controls.length - 1
            }`}
          >
            <div>
              <h4 className="font-semibold text-[#000000CC] mb-1">
                {control.title}
              </h4>

              <p className="text-sm leading-6 text-[#00000099]">
                {control.description}
              </p>
            </div>

            <div className="flex items-start justify-end p-4">
              <Shield
                size={18}
                strokeWidth={1.8}
                className="text-[#004ADE]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}