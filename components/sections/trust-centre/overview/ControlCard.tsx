
import { ArrowUpRight, Shield } from "lucide-react";
import { ControlCardData } from "./types";
interface Props {
  data: ControlCardData;
  onClick: (sectionId: string) => void;
}

export default function ControlCard({ data, onClick }: Props) {

  return (
    <div className="rounded-xl border border-[#B3B3B3] bg-white p-8 pt-[16px] cmp_bx opacity-0">
      <button
        onClick={() => onClick(data.href)}
        className="mb-[12px] inline-flex items-center justify-start leading-[160%] gap-1 font-medium underline text-[#000000CC] font-primary cursor-pointer text-start"
      >
        {data.title}
        <ArrowUpRight
          size={16}
          className="text-[#3F89FF]"
        />
      </button>

      <ul className="space-y-2">
        {data.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-[6px]"
          >
            <Shield size={18} color="#3F89FF" />
            <span className="text-[#6B7280]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}