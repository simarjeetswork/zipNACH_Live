import { ControlSection } from "./types";

interface Props {
  sections: ControlSection[];
  activeSection: string;
}

export default function ControlsSidebar({
  sections,
  activeSection,
}: Props) {
  return (
    <aside className="md:sticky top-[140px] self-start lg:block hidden">
      <h3 className="mb-3 leading-[120%] text-xl font-medium text-[#041026] font-primary">
        Controls
      </h3>

      <ul className="space-y-3">
        {sections.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block rounded-md px-3 py-2 text-sm transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-[#EEF4FF] text-[#004ADE] font-medium"
                  : "text-[#67758F] hover:text-[#004ADE]"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}