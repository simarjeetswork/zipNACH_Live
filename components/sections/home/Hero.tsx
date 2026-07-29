"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import GridBackground from "@/components/ui/GridBackground";
import { useState } from "react";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      id: "physical",
      title: "Physical Mandate",
      subtitle: "Manual Paper Based",
      video: "/animation/slide-1.mp4",
    },
    {
      id: "emandate",
      title: "e-mandate",
      subtitle: "Net Banking/Debit Card",
      video: "/animation/slide-2.mp4",
    },
    {
      id: "esign",
      title: "e-sign Aadhaar Mandate",
      subtitle: "Biometric/OTP",
      video: "/animation/slide-3.mp4",
    },
    {
      id: "upi",
      title: "UPI Mandate",
      subtitle: "App based Autopay",
      video: "/animation/slide-4.mp4",
    },
  ];

  return (
    <>
      <GridBackground />
      <div className="flex items-center justify-center pt-36 px-6">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <AnimatedText
              as="p"
              className="max-w-[623px] w-full border border-[#CACAFF] flex items-center justify-center uppercase rounded-[35px] text-[10px] md:text-sm text-[#3535DD] font-mono bg-white lg:mb-[40px] md:mb-[22px] mb-[16px] py-1 md:py-1 px-2"
            >
              End-to-End Mandate Management → From authentication to
              reconciliation
            </AnimatedText>
            <Heading
              className="max-w-[958px] mb-3 leading-[120%] text-[var(--text-heading-dark)] font-primary font-medium text-[26px] md:text-[46px] lg:text-[56px]"
              as="h1"
            >
              Simplifying Recurring Collections for Enterprises and Banks.
            </Heading>
            <AnimatedText
              delay={0.5}
              as="p"
              className="max-w-[704px] text-[var(--color-gray)] mb-[16px] md:mb-[45px] lg:mb-[75px] text-xs md:text-[16px]"
            >
              Digitize your entire recurring process. Enables corporates to use
              their interface or application with the benefits of zipNACH
              platform.
            </AnimatedText>
          </div>
        </div>
      </div>

      {/* Diagonal design section */}
      <section className="relative overflow-hidden pb-24 md:pb-32 px-6 flex flex-col items-center justify-center d-none">
        <div className="mb-[22px] md:mb-[75px] lg:mb-[78px]">
          <AnimatedText delay={0.5} as="p">
            <Button label="Schedule a Demo" endIcon="/images/play-icon.svg" />
          </AnimatedText>
        </div>
        {/* diagonal split background */}
        <div className="relative bg-none" />
        <div
          className="absolute inset-0 bg-[#F2F7FF] z-[-1]"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0% 100%)",
          }}
        />
        <svg
          className="absolute inset-0 -z-[1] h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="100"
            y1="0"
            x2="0"
            y2="100"
            stroke="#98c5ff"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div
          className="absolute right-0 top-[1px] h-3 w-3 bg-[#004ADE] rounded-[3px] animate-diagonal-travel z-1"
          style={{ transform: "translate(-50%, -50%)" }}
        />
        <div className="container relative z-1 lg:block hidden">
          <div className="mx-auto max-w-[1142px] h-[352px] rounded-[24px] bg-[#FFFFFF1A] p-3 shadow-[2px_2px_12px_0px_#0000001A] backdrop-blur-sm">
            <div className="overflow-hidden rounded-[20px] bg-white shadow-[2px_2px_12px_0px_#0000001A]">
              {/* Tabs */}
              <div className="flex overflow-x-auto border-b border-[#E8EDF7]">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 min-w-[180px] border-b-2 px-5 py-5 text-center transition ${activeTab === index
                      ? "border-[#3F89FF]"
                      : "border-transparent"
                      }`}
                  >
                    <h4 className="text-[16px] font-semibold text-[#0F172A]">
                      {tab.title}
                    </h4>

                    <p className="mt-1 text-[12px] text-[#64748B]">
                      {tab.subtitle}
                    </p>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-center py-[50px] px-[20px] md:px-[60px] lg:px-[100px]">
                <video
                  key={tabs[activeTab].video}
                  src={tabs[activeTab].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: "800px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
