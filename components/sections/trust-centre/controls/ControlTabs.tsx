"use client";

import { useEffect, useMemo, useState } from "react";
import { controlsData } from "./controls-data";
import ControlsSearch from "./ControlsSearch";
import ControlsCard from "./ControlsCard";
import ControlsSidebar from "./ControlsSidebar";

interface Props {
selectedSection: string | null;
}
export default function ControlsTab({
  selectedSection,
}: Props) {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-120px 0px -60% 0px",
      threshold: 0.2,
    }
  );

  controlsData.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);


  useEffect(() => {
  if (!selectedSection) return;

  const timer = setTimeout(() => {
    const element = document.getElementById(selectedSection);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);

  return () => clearTimeout(timer);
}, [selectedSection]);

  const filteredData = useMemo(() => {
    if (!search) return controlsData;

    return controlsData
      .map((section) => ({
        ...section,
        controls: section.controls.filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter((section) => section.controls.length);
  }, [search]);

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
      <ControlsSidebar
  sections={controlsData}
  activeSection={activeSection}
/>

      <div>
        <ControlsSearch
          value={search}
          onChange={setSearch}
        />

        <div className="space-y-10">
          {filteredData.map((section) => (
            <ControlsCard
              key={section.id}
              section={section}
            />
          ))}
        </div>
      </div>
    </div>
  );
}