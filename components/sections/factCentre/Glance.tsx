"use client"
import Heading from "@/components/ui/Heading";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap/gsap";
import { useRef } from "react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import Counter from "@/components/ui/Counter";
export default function Glance() {
    const scaleData = [
        {
            id: 1,
            heading: "Corporate \n Customers",
            data: 650,
            suffix: "+",

        },
        {
            id: 2,
            heading: "Mandates \n Processed",
            data: 45,
            suffix: "M+",

        },
        {
            id: 3,
            heading: "Total Mandate\nregistered",
            data: 36,
            suffix: "M+",

        },
        {
            id: 4,
            heading: "Transaction \n Processed",
            data: 53,
            suffix: "M+",

        },
        {
            id: 5,
            heading: "Transaction \n Success",
            data: 29,
            suffix: "M+",

        },
        {
            id: 6,
            heading: "Yoeki \n Market Share",
            data: 42,
            suffix: ".9%",

        },
    ];
    const container = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {

            const box = gsap.utils.selector(container);

            const triggers = ScrollTrigger.batch(box(".gln_bx"), {
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
            console.log("triggers created:", triggers.length);
            console.log("all ScrollTriggers:", ScrollTrigger.getAll().length);
        }, { scope: container, dependencies: [] }
    );
    return (
        <>
            <section className="fct_glc pt-10 pb-20 px-6 relative overflow-hidden bg-white" ref={container}>
                <div className="container mx-auto ">
                    <div className="relative z-1 text-center">
                        <AnimatedText as="p" className="text-blue text-center text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-5">At a Glance</AnimatedText>
                        <Heading as="h2" className=" text-2xl sm:text-4xl xl:text-5xl leading-[110%] text-center font-light font-primary text-heading mb-12">The scale we operate at.</Heading>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            {scaleData.map((data, index) => (
                                <div key={index} className="bg-[#F1F7FF] rounded-[4px] p-7 sm:p-10 flex flex-col min-h-[100px] md:min-h-[330px] justify-end items-start gln_bx opacity-0">
                                    <Counter delay="0.7" end={data.data} suffix={data.suffix} className="text-primary text-2xl sm:text-5xl font-mono leading-[120%] font-light mb-3" />
                                    <h6 className=" text-sm sm:text-base font-medium leading-[130%] text-start text-[#666666] font-primary whitespace-pre-line">{data.heading}</h6>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}