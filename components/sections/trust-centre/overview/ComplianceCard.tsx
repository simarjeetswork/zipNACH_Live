import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { ComplianceItem } from "./types";

interface Props {
  items: ComplianceItem[];
}

export default function ComplianceCard({ items }: Props) {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-6">
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="flex items-center gap-2 font-semibold underline text-sm"
            >
              <FileText size={18} color="#3F89FF" />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}