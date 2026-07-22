"use client"
import { useRef } from "react"
import { useGSAP, gsap } from "@/lib/gsap/gsap"
import Counter from "@/components/ui/Counter";

export default function HeroUsp() {
    const secRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if (!secRef.current) return;
        gsap.from(secRef.current, {
            opacity: 0,
            y: 40,
            delay: 0.5,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: secRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });
    }, { scope: secRef,dependencies: [] });
    const data = [
        {
            id: 1,
            heading: "Mandates Processed",
            data: 180,
            suffix: "M+",

        },
        {
            id: 2,
            heading: "Sponsor bank integrations",
            data: 30,
            suffix: "+",
        },
        {
            id: 3,
            heading: "Uptime, last 12 mo.",
            data: 99,
            suffix: ".99%",

        },
        {
            id: 4,
            heading: "Enterprise customers",
            data: 120,
            suffix: "+",

        },

    ]

    return (



        <>
            <div className="flex flex-row gap-4 justify-between w-full mt-20 border-t border-[#b3b3b360] pt-4" ref={secRef}>
                {data.map((item) => {
                    return (
                        <div key={item.id} className="w-auto flex-item-start justify-start">
                            <p className="text-sm font-mono leading-[180%] uppercase text-para">{item.heading}</p>
                            <Counter delay="0.7" end={item.data} suffix={item.suffix} className="text-[#00000099] text-xl font-mono leading-[120%] font-medium" />

                        </div>
                    )
                }
                )}

            </div>
        </>
    )
}