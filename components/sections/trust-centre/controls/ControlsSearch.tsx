import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ControlsSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative mb-8 max-w-[365px]">
      <Search
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#606264]"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        className="h-10 w-full rounded-[8px] border border-[#E5E7EB] text-[#606264] bg-white pl-10 pr-4 text-sm outline-none transition focus:border-[#B3B3B3]"
      />
    </div>
  );
}