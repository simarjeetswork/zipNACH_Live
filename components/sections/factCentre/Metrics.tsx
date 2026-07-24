"use client"
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import Heading from "@/components/ui/Heading";
import Counter from "@/components/ui/Counter";
import success from "@/public/images/factCentre/success.svg"
import growth from "@/public/images/factCentre/growth.svg"
import settlement from "@/public/images/factCentre/settlement.svg"
import Image from "next/image";
import { useRef } from "react";
import { useGSAP, ScrollTrigger, gsap } from "@/lib/gsap/gsap";

export default function Metrics() {
    const stats = [
        {
            id: 1,
            title: 'NACH Success Rate',
            subtitle: '4.6M in last 30 days',
            value: 92,
            suffix: '%',
        },
        {
            id: 2,
            title: 'UPI Success Rate',
            subtitle: '8.9M in last 30 days',
            value: 96,
            suffix: '%',
        },
        {
            id: 3,
            title: 'Overall Collection Success',
            subtitle: '13.5M in last 30 days',
            value: 94,
            suffix: '%',
        },
    ];
    const growthData = [
        {
            id: 1,
            title: 'Total Successful',
            value: "13.5M",
            icon: success
        },
        {
            id: 2,
            title: 'MoM Growth',
            value: "12.4%",
            icon: growth
        },
        {
            id: 3,
            title: 'Avg. Settlement',
            value: "<2 Mins",
            icon: settlement
        },
    ];
    const containerRef = useRef<HTMLDivElement>(null);
    const succesRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const box = gsap.utils.selector(containerRef);
            ScrollTrigger.batch(box(".mtr_cl_s_bx"), {
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
            gsap.from(succesRef.current, {
                opacity: 0,
                y: 100,
                duration: 1,
                delay:0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: succesRef.current,
                    start: "top 80%",
                    once: true,
                }
            });
        }, { scope: containerRef, dependencies: [] }
    );
    return (

        <>
            <section className="fc_mt_sc relative px-6 overflow-hidden" ref={containerRef}>
                <div className="container mx-auto">
                    <div className="bg-heading py-18 lg:py-28 px-6 relative rounded-xl">
                        <div className="bx_ptrn absolute w-full h-full inset-0"></div>
                        <div className="relative z-2 text-center">
                            <AnimatedText as="p" className="text-blue text-center text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-5">Success rate</AnimatedText>
                            <Heading as="h2" className=" text-2xl sm:text-4xl xl:text-5xl leading-[110%] text-center font-light font-primary text-white mb-12">Collection Success Metrics</Heading>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-full lg:max-w-[80%] mx-auto">
                            {stats.map((stat) => (
                                <div key={stat.id} className="mtr_cl_s_bx opacity-0 flex flex-col items-start justify-start overflow-hidden relative bg-[url('/images/factCentre/noise.png')] bg-cover bg-no-repeat bg-center  border-[0.4px] border-[#B3B3B333] py-6 px-7 rounded-xl min-h-[200px]">
                                    <div className="bg-[#a4a4a460] rounded-[100px] blur-3xl absolute w-20 h-20 right-0 top-0"></div>
                                    <div className="absolute bottom-0  right-2 w-full h-auto flex justify-end">
                                        <Counter
                                            end={stat.value}
                                            suffix={stat.suffix}
                                            className=" text-7xl sm:text-7xl font-bold font-mono txt_grd"
                                        />
                                    </div>
                                    <p className="text-[#8EBAFF] text-sm sm:text-base font-medium font-primary text-start">{stat.title}</p>
                                    <p className="text-[#FFFFFF] text-xs sm:text-sm  mt-1 text-start">{stat.subtitle}</p>
                                </div>
                            ))}
                        </div>
                        <div className="grid sm:grid-cols-3 gap-7 sm:gap-4 max-w-full lg:max-w-[60%] mt-6 mx-auto bg-[url('/images/factCentre/noise.png')] bg-cover bg-no-repeat bg-center py-8 px-7 rounded-xl relative z-2" ref={succesRef}>
                            {growthData.map((stat) => (
                                <div key={stat.id} className="flex flex-row gap-2 items-start justify-start sm:justify-center">
                                    <Image src={stat.icon} alt="icon" width={24} height={24} className="object-contain shrink-0 -mt-[1px]" />
                                    <div className="w-auto">
                                        <p className="text-[#FFFFFF99] uppercase items-start text-sm sm:text-sm font-semibold text-start">{stat.title}</p>
                                        <p className="text-[#FFFFFF] text-xs sm:text-sm mt-1 text-start">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}