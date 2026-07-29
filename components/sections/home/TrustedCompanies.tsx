"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CurveBackground from "./CurveBackground";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import AnimatedButton from "@/lib/gsap/animations/AnimateButton";

const companies = [
    "IDFC FIRST BANK ",
    "HERO FINCORP",
    "KOTAK MAHINDRA BANK",
    "FINOVA CAPITAL",
    "KOGTA FINANCIAL INDIA",
    "ADANI CAPITAL",
    "BERAR FINANCE",
    "MONEYBOXX FINANCE",
    "ORIX AUTO INFRASTRUCTURE SERVICES"
];

export default function TrustedCompanies() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            ease: "none",
            duration: 30,
            repeat: -1,
        });
    });

    return (
        <section className="relative overflow-hidden bg-[#F2F7FF]">
            <div className="container">
                <AnimatedText
                    as="p"
                    delay={0.2}
                    className="md-4 md:mb-[28px] text-center font-mono uppercase text-sm text-[#05132B]"
                >
                    Trusted by 650+ Companies
                </AnimatedText>

                <div className="overflow-hidden">
                    <div
                        ref={marqueeRef}
                        className="flex w-max items-center gap-4 md:gap-16 py-6"
                    >
                        {[...companies, ...companies].map((company, index) => (
                            <div
                                key={index}
                                className="
                shrink-0
                rounded-xl
                border border-[#E5EEF9]
                bg-white
                px-6
                py-3
                shadow-sm
              "
                            >
                                <span className="font-mono text-[15px] text-[#3F89FF] whitespace-nowrap">
                                    {company}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center md:mt-3">
                    <AnimatedButton className=" text-base font-semibold text-center" delay={0.3}>View all</AnimatedButton>
                </div>

            </div>

            <CurveBackground />
        </section>
    );
}
