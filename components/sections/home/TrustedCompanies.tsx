"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CurveBackground from "./CurveBackground";
import AnimatedText from "@/lib/gsap/animations/AnimateText";

const logos = [
    "/images/companies/trusted-companies-logo1.png",
    "/images/companies/trusted-companies-logo2.png",
    "/images/companies/trusted-companies-logo3.png",
    "/images/companies/trusted-companies-logo4.png",
    "/images/companies/trusted-companies-logo5.png",
    "/images/companies/trusted-companies-logo6.png",
    "/images/companies/trusted-companies-logo7.png",
    "/images/companies/trusted-companies-logo8.png",
    "/images/companies/trusted-companies-logo9.png",
    "/images/companies/trusted-companies-logo10.png"
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
                    Trusted by 170+ Companies
                </AnimatedText>

                <div className="overflow-hidden">
                    <div
                        ref={marqueeRef}
                        className="flex w-max items-center gap-16 md:gap-24 py-6"
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="relative h-20 w-[78px] shrink-0 md:h-10 md:w-[78px]"
                            >
                                <Image
                                    src={logo}
                                    alt=""
                                    fill
                                    className="object-contain opacity-60 grayscale"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <CurveBackground />
        </section>
    );
}