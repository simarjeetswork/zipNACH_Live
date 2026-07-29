// components/sections/analytics/NachRejectionChart.tsx
'use client';
import Heading from '@/components/ui/Heading';
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap/gsap';
import { useEffect, useRef, useState } from 'react';
import { RejectionReason, rejectionReasonsData } from './data_distribution';

export default function Distribution() {
    const [active, setActive] = useState<RejectionReason | null>(null);
    const [canHover, setCanHover] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        setCanHover(mq.matches);
        const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);
    useGSAP(
        () => {
            if (!active) return;

            const bar = containerRef.current?.querySelector<HTMLSpanElement>('.bar_percent');
            if (!bar) return;

            const targetPercent = parseFloat(active.percentage); // "3.71%" -> 3.71

            gsap.fromTo(
                bar,
                { width: '0%' },
                {
                    width: `${targetPercent}%`,
                    duration: 0.5,
                    ease: 'linear',
                }
            );
        },
        { scope: containerRef, dependencies: [active] }
    );
    const displayed = active ?? rejectionReasonsData[0];
    return (
        <div className="w-full mt-2">
            <Heading as="h3" className=" text-base sm:text-xl xl:text-2xl leading-[110%] text-start font-medium font-primary text-heading mb-1">Rejection Distribution</Heading>
            <p className='text-xs font-mono text-[#67758F] mb-2'>10,391 FAILED DEBITS  |  119-REASONS</p>
            <div className="grid grid-cols-1  lg:grid-cols-[1fr_0.7fr] gap-12 lg:gap-8 mt-10 items-start" ref={containerRef}>
                {/* Left — Area */}
                <div className="bg-white sm:order-0 order-1 p-6 shadow-[4px_4px_12px_0px_#0000001A] rounded-xl border-[#b3b3b3a4] border w-full lg:w-[80%]">
                    <div className='w-full flex items-center gap-2 justify-start font-mono text-xs font-medium text-[#67758F]'> <span className='h-4 w-4 inline-block rounded-sm' style={{ backgroundColor: displayed.color }}></span> {displayed.desc}</div>
                    <h6 className='mt-2 text-[#032656] text-lg font-semibold'>{displayed.reason}</h6>
                    <hr className='block bg-[#b3b3b3a1] text-[#b3b3b36e] h-[1px] w-full mt-6 mb-7' />
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <span className='block text-[#032656] text-2xl leading-[140%] font-medium mb-2'>{displayed.percentage}</span>
                            <p className='text-[#666666] text-sm fonr-mono font-medium'>Of all rejections</p>
                        </div>
                        <div>
                            <span className='block text-[#032656] text-2xl leading-[140%] font-medium mb-2'>{displayed.count}</span>
                            <p className='text-[#666666] text-sm fonr-mono font-medium'>Mandates registered</p>
                        </div>
                    </div>

                    <div className="loader_cnt relative w-full">
                        <span className='block w-full rounded-xl bg-[#3F89FF1A] h-1 mt-8'></span>
                        <span className='absolute rounded-xl left-0 top-0 bg-[#3F89FF] h-1 bar_percent'></span>
                    </div>
                </div>

                {/* Right — list with bars */}
                <div>
                    <div className="grid grid-cols-10 gap-2  sm:grid-cols-10  xl:grid-cols-14">
                        {rejectionReasonsData.map((item) => {
                            const isActive = displayed.id === item.id;

                            return (
                                <div
                                    key={item.id}
                                    className={`h-6 w-6 cursor-pointer rounded-sm transition-transform duration-150 sm:h-7 sm:w-7 ${isActive ? "scale-110 ring-2 ring-offset-1 ring-[#004ADE]" : "hover:scale-110"
                                        }`}
                                    style={{ backgroundColor: item.color }}
                                    onMouseEnter={canHover ? () => setActive(item) : undefined}
                                    onClick={() => {
                                        if (canHover) return; // desktop already handled by hover
                                        setActive((prev) => (prev?.id === item.id ? null : item));
                                    }}
                                    aria-label={item.reason}
                                />
                            );
                        })}
                    </div>
                    <div className='flex flex-row justify-center gap-5 mt-7'>
                        <div className='w-auto flex items-center gap-2 justify-start font-mono text-xs font-medium text-[#67758F]'> <span className='h-4 w-4 inline-block rounded-sm bg-[#C9DEFF]'></span> Business Decline</div>
                        <div className='w-auto flex items-center gap-2 justify-start font-mono text-xs font-medium text-[#67758F]'> <span className='h-4 w-4 inline-block rounded-sm bg-[#EAF2FF]'></span> Technical Decline</div></div>
                </div>
            </div>
        </div>
    );
}