"use client";

import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap/gsap"
import { useRef, useState } from "react";
import ComplianceCard from "./ComplianceCard";
import { complianceData, controlsData } from "./data";
import ControlCard from "./ControlCard";
import ControlsTab from "../controls/ControlTabs";

const tabs = ["Overview", "Controls", "Resources"];

export default function TrustTabs() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null)
  const controlSecRef = useRef<HTMLDivElement>(null)
  const handleControlClick = (sectionId: string) => {
    setSelectedSection(sectionId);
    setActiveTab("Controls");
  };
  useGSAP(
    () => {
      const box = gsap.utils.selector(containerRef);
      ScrollTrigger.batch(box(".cmp_bx"), {
        start: "top 80%",
        once: true,
        onEnter: (elements) => {
          gsap.fromTo(elements, {
            y: 100,
            opacity: 0,
          },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            });
        },
      });
      ScrollTrigger.refresh();
    }, { scope: containerRef, dependencies: [activeTab] }
  );

  return (
    <section className="pt-10 pb-20 px-6 relative mb-[64px]" ref={controlSecRef}>
      <div className="container">
        <div className="sticky top-[68px] z-30 border-b border-[#B3B3B3] bg-white">
          <div className="flex gap-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-4 text-sm transition font-medium font-secondary cursor-pointer
                ${activeTab === tab ? "text-[#2563EB]" : "text-[#667085]"}`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#004ADE]" />
                )}
              </button>
            ))}
          </div>
        </div>
        {activeTab === "Overview" && (
          <div className="mt-10 grid gap-10 lg:grid-cols-[295px_1fr]">
            <div className="">
              <p
                className="mb-3 md:mb[24px] leading-[120%] text-xl font-medium text-[#041026] font-primary"
              >
                Compliance
              </p>
              <ComplianceCard items={complianceData} />
            </div>
            <div>
              <p
                className="mb-3 md:mb[24px] leading-[120%] text-xl font-medium text-[#041026] font-primary"
              >
                Controls
              </p>
              <div className="grid gap-6 md:grid-cols-2" ref={containerRef}>
                {controlsData.map((card) => (
                  <ControlCard
                    key={card.title}
                    data={card}
                    onClick={handleControlClick}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "Controls" && (
          <ControlsTab selectedSection={selectedSection} />
        )}
        {activeTab === "Resources" && (
          <div className="py-20 text-center">
            There is no resources as of now.
          </div>
        )}
      </div>
    </section>
  );
}
