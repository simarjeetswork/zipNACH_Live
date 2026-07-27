"use client";

import AnimatedText from "@/lib/gsap/animations/AnimateText";
import { useState } from "react";
import ComplianceCard from "./ComplianceCard";
import { complianceData, controlsData } from "./data";
import ControlCard from "./ControlCard";
import ControlsTab from "../controls/ControlTabs";

const tabs = ["Overview", "Controls", "Resources"];

export default function TrustTabs() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleControlClick = (sectionId: string) => {
    setSelectedSection(sectionId);
    setActiveTab("Controls");
  };
  return (
    <section className="py-4 mb-[64px]">
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
            <div>
              <AnimatedText
                as="p"
                delay={0.2}
                className="mb-3 md:mb[24px] leading-[120%] text-xl font-medium text-[#041026] font-primary"
              >
                Compliance
              </AnimatedText>
              <ComplianceCard items={complianceData} />
            </div>
            <div>
              <AnimatedText
                as="p"
                delay={0.2}
                className="mb-3 md:mb[24px] leading-[120%] text-xl font-medium text-[#041026] font-primary"
              >
                Controls
              </AnimatedText>
              <div className="grid gap-6 md:grid-cols-2">
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
