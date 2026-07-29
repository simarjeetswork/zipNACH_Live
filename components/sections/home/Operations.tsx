"use client"
import Heading from "@/components/ui/Heading";
import operationImages from '@/public/images/operations/index'
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import Image from "next/image";
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap/gsap";
import { useRef } from "react";
import NetworkDiagram from "./Networkdiagram";

export default function Operations() {

    const data = [
        { "id": 1, "label": "Duplicate Mandate Records", "icon": operationImages.dupRecords, "x": 14.63, "y": 11.36 },
        { "id": 2, "label": "Higher Rejection Rate", "icon": operationImages.rejectionRate, "x": 74.42, "y": 10.61 },
        { "id": 3, "label": "High Processing Time", "icon": operationImages.highProcessing, "x": 5.30, "y": 36.36 },
        { "id": 4, "label": "Operational Bottlenecks", "icon": operationImages.bottlenecks, "x": 27.63, "y": 30.05 },
        { "id": 5, "label": "Manual Retry Process", "icon": operationImages.manualRetry, "x": 53.27, "y": 28.28 },
        { "id": 6, "label": "Customer Escalation", "icon": operationImages.customerEscalation, "x": 75.51, "y": 32.83 },
        { "id": 7, "label": "Validation issues", "icon": operationImages.validationIssue, "x": 13.89, "y": 54.80 },
        { "id": 8, "label": "No Real-Time Status", "icon": operationImages.noRealtime, "x": 39.28, "y": 48.48 },
        { "id": 9, "label": "Multiple Bank Portals", "icon": operationImages.multipleBank, "x": 63.66, "y": 52.02 },
        { "id": 10, "label": "API Integration Complexity", "icon": operationImages.apiIntegration, "x": 31.55, "y": 62.63 },
        { "id": 11, "label": "Delayed MIS Reports", "icon": operationImages.delayedMis, "x": 54.65, "y": 71.21 },
        { "id": 12, "label": "Regulatory Compliance Gaps", "icon": operationImages.regulatory, "x": 77.19, "y": 69.44 },
        { "id": 13, "label": "Failed Debit Transaction", "icon": operationImages.failedDebit, "x": 13.43, "y": 76.52 }
    ]
    const containerRef = useRef<HTMLDivElement>(null)
    const chipRef = useRef<HTMLDivElement[]>([])
    const mainImageRef = useRef<HTMLDivElement>(null)
    const networkDiagramRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${data.length * 120}`,
                pin: containerRef.current,
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });
        data.forEach((i, index) => {
            tl.fromTo(
                chipRef.current[index],
                { opacity: 1 },
                {
                    opacity: 0, left: "50%",
                    top: "50%",
                    xPercent: -50,
                    yPercent: -50,
                    ease: "power2.out",
                }, "0"
            )
        })

        tl.fromTo(mainImageRef.current, { opacity: 0 }, { opacity: 1 })
        tl.fromTo(networkDiagramRef.current, { opacity: 0 }, { opacity: 1 })
    },
    ), { scope: containerRef };


    return (
        <>
            <section className="home_opr pt-10 pb-15 px-6 relative bx_ptrn overflow-hidden flex items-start" ref={containerRef}>
                <div className="container mx-auto">
                    <div className="relative z-1 text-center">
                        <AnimatedText as="p" className="text-blue text-center text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-5">The transformation</AnimatedText>
                        <Heading as="h2" className=" text-2xl sm:text-4xl xl:text-5xl leading-[110%] text-center font-light font-primary text-heading mb-10">From fragmented workflows to <br />
                            <span className="text-primary font-medium">connected operations.</span></Heading>
                    </div>
                    <div className="anm_scr w-full bg-white relative flex-1 min-h-[65vh]">
                        {
                            data.map((item, i) => {
                                return (
                                    <div key={item.id} ref={(el) => { if (el) chipRef.current[i] = el; }} className="oper_chips inline-flex gap-2 items-center justify-between absolute border rounded-lg shadow-xl bg-white px-1 py-1 border-[#b3b3b37e] w-[80px] sm:w-[20%] lg:w-auto" style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-0%, -0%)" }}>
                                        <div className=" flex items-center justify-center w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] shrink-0 hidden md:block">
                                            <Image src={item.icon} alt={item.label} width={40} height={40} className="object-contain" />
                                        </div>
                                        <p className="text-[9px] sm:text-[10px] lg:text-sm text-center text-[#383838] font-medium md:pe-3">{item.label}</p>
                                    </div>
                                )
                            })
                        }

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 flex items-center justify-center -translate-y-1/2 bg-red w-[100px] h-[100px] sm:w-[180px] smh-[180px] z-[50] opacity-0" ref={mainImageRef}>
                            <Image src={operationImages.zipSvg} alt="main" width={150} height={150} className="object-contain" />
                        </div>
                        <div ref={networkDiagramRef} className="opacity-0">
                            <NetworkDiagram />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}