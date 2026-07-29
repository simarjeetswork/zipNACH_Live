"use client";

import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const stats = [
    { value: "650+", label: "Corporate\nCustomers" },
    { value: "22+", label: "Banks &\nFinancial Institutions" },
    { value: "600k+", label: "Mandates\nProcessed" },
    { value: "2.1M+", label: "Transactions\nProcessed" },
];

export default function StatsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        if (window.innerWidth < 1024) return;

        gsap.set(cardsRef.current, {
            x: (i) => [0, 6, -6, 10][i],
            y: (i) => [0, 4, 8, 12][i],
            rotation: (i) => [0, -3, 6, -9][i],
            scale: 0.9,
            opacity: 1,
            zIndex: (i) => stats.length - i,
        });

        gsap.to(cardsRef.current, {
            x: (i) => [-390, -130, 130, 390][i],
            y: 0,
            rotation: (i) => [-4, 3, -3, 4][i],
            scale: 1,
            duration: 0.6,
            ease: "ease",
            stagger: 0.08,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const scrollToSection = useScrollToSection();
    useGSAP(
        () => {
            const box = gsap.utils.selector(containerRef);
            ScrollTrigger.batch(box(".stats_bx"), {
                start: "top 80%",
                once: true,
                onEnter: (elements) => {
                    gsap.fromTo(
                        elements,
                        {
                            y: 100,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power3.out",
                        },
                    );
                },
            });
        },
        { scope: containerRef, dependencies: [] },
    );

    return (
        <section className="relative px-6">
            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-70"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(92,143,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(92,143,255,.08) 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="container relative z-10" ref={sectionRef}>
                <div className="relative hidden lg:flex h-[380px] items-center justify-center">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] rounded-lg bg-white px-8 py-8 text-center"
                            style={{
                                border: "2px dashed #B3B3B3",
                                height: "180px",
                            }}
                        >
                            <h3 className="text-3xl text-[#3535DD] font-mono">
                                {item.value}
                            </h3>

                            <p className="mt-4 whitespace-pre-line text-[#67758F]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
                <div
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:hidden"
                    ref={containerRef}
                >
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="stats_bx rounded-lg bg-white px-6 py-8 text-center opacity-0"
                            style={{
                                border: "2px dashed #B3B3B3",
                            }}
                        >
                            <h3 className="text-3xl text-[#3535DD] font-mono">
                                {item.value}
                            </h3>

                            <p className="mt-4 whitespace-pre-line text-[#67758F]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
