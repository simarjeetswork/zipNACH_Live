"use client"
import Heading from "@/components/ui/Heading";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import { useRef } from "react";
import Map from "./Map";
export default function Enterprise() {
    const container = useRef<HTMLDivElement>(null);

    return (
        <>
            <section className="fct_ent_sec pt-10 sm:pt-20 pb-20 px-6 relative overflow-hidden bg-white" ref={container}>
                <div className="container mx-auto ">
                    <div className="grid xl:grid-cols-[0.4fr_1fr] grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-2 justify-between">
                        <div className="relative z-1 text-center lg:text-start lg:mt-10 w-full">
                            <AnimatedText as="p" className="text-blue text-start text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-5">Trusted by 200+ Enterprises</AnimatedText>
                            <Heading as="h2" className=" text-2xl sm:text-4xl xl:text-5xl leading-[110%] text-center lg:text-start font-light font-primary text-heading mb-12">The infrastructure behind India's Recurring payments.</Heading>

                        </div>
                        <div className="mp_dt w-full">
                            <Map />
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}