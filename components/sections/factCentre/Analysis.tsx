"use client"
import Heading from "@/components/ui/Heading";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap/gsap";
import { useRef } from "react";
import Chart from "./Distribution";
import Distribution from "./Distribution";
export default function Analysis() {
    const container = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const box = gsap.utils.selector(container);
            ScrollTrigger.batch(box(".gln_bx"), {
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

        }, { scope: container, dependencies: [] }
    );

    return (
        <>
            <section className="fct_glc pt-20 pb-15 sm:pb-20 px-6 relative overflow-hidden bg-white" ref={container}>
                <div className="container mx-auto ">
                    <div className=" w-full lg:w-[90%] mx-auto">
                        <div className="relative z-1 text-center">
                            <AnimatedText as="p" className="text-blue text-center text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-5">Rejection Analysis</AnimatedText>
                            <Heading as="h2" className=" text-2xl sm:text-4xl xl:text-5xl leading-[110%] text-center font-light font-primary text-heading mb-12">Why transactions fail — so you<br className="hidden sm:block" /> can fix them at the source.</Heading>
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                            </div>
                        </div>
                        <Distribution />
                    </div>
                </div>

            </section>
        </>
    )
}