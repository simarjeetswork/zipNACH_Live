"use client";
import Chip from "@/components/ui/Chip";
import Heading from "@/components/ui/Heading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

const securityCards = [
    {
        id: "access-control",
        image: "/images/security-reliability-img1.png",
        title: "Role-Based Access Control",
        description:
            "Control user access with configurable roles and permissions. ",
    },
    {
        id: "availability",
        image: "/images/security-reliability-img2.png",
        title: "99.97% High Availability",
        description:
            "Ensure uninterrupted operations with enterprise-grade uptime.",
    },
    {
        id: "security",
        image: "/images/security-reliability-img3.png",
        title: "Enterprise Security",
        description:
            "Protect sensitive data with encryption and secure authentication. ",
    },
    {
        id: "monitoring",
        image: "/images/security-reliability-img4.png",
        title: "Enterprise Security",
        description: "Manage users, entities, and operations centrally.",
    },
    {
        id: "compliance",
        image: "/images/security-reliability-img5.png",
        title: "Enterprise Security",
        description:
            "Deploy on Cloud, Private Cloud, or On-Premise infrastructure with the flexibility to scale as transaction volumes grow. ",
    },
    {
        id: "governance",
        image: "/images/security-reliability-img6.png",
        title: "Enterprise Security",
        description: "Maintain complete audit trails and regulatory compliance. ",
    },
];

export default function SecurityAndReliability() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (window.innerWidth < 1024) return;

        const slider = sliderRef.current;
        const section = sectionRef.current;

        if (!slider || !section) return;

        const cards = slider.children.length;
        const cardWidth = slider.children[0].clientWidth + 24;
        const visibleCards = 3;

        const scrollDistance = (cards - visibleCards) * cardWidth;
        gsap.to(slider, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top+=98",
                end: `+=${scrollDistance}`,
                pin: true,
                pinSpacing: true,

                scrub: 1,
                // anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    gsap.registerPlugin(ScrollTrigger);
    return (
        <section className="py-20 md:mt-10">
            <div className="container">
                <div className="rounded-xl bg-[#032656] px-6 py-14 md:px-12 md:py-20">
                    <div className="flex justify-center">
                        <Chip label=" Security & Reliability" textColor="#8CFF93" />
                    </div>

                    <Heading className="mx-auto max-w-[620px] text-center mb-4 md:mb-[87px] text-white text-2xl leading-tight font-primary font-light md:text-[40px]">
                        {" "}
                        Enterprise-grade reliability
                        <br />
                        and governance.
                    </Heading>

                    <div
                        ref={sectionRef}
                        className="rounded-xl bg-[#032656] px-6 overflow-hidden"
                    >
                        <div ref={sliderRef} className="hidden lg:flex gap-6">
                            {securityCards.map((card) => (
                                <div
                                    key={card.id}
                                    className="w-[380px] flex-shrink-0 rounded-[8px] bg-[#FFFFFF03] p-8 text-center"
                                >
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={330}
                                        height={220}
                                        className="mx-auto mb-4 md:mb-8 h-auto"
                                    />

                                    <h3 className="text-[18px] font-normal font-secondary text-white">
                                        {card.title}
                                    </h3>

                                    <p className="mt-2 mb-0 text-xs leading-7 text-[#FFFFFF99]">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="grid gap-6 lg:hidden md:grid-cols-2">
                            {securityCards.map((card) => (
                                <div
                                    key={card.id}
                                    className="rounded-[8px] bg-[#FFFFFF03] px-8 py-10 text-center"
                                >
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={330}
                                        height={220}
                                        className="mx-auto mb-4 md:mb-8 h-auto"
                                    />

                                    <h3 className="text-[18px] font-normal font-secondary text-white">
                                        {card.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-7 text-[#FFFFFF99]">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
