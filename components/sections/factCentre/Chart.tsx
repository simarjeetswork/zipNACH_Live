// components/sections/analytics/NachRejectionChart.tsx
'use client';
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap/gsap';
import { useRef, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const values = {
    NACH: [
        { name: 'Insufficient Funds', value: 1800, percent: 36, color: '#0036CB' },
        { name: 'Account Closed', value: 1250, percent: 25, color: '#0036CB' },
        { name: 'Signature Mismatch', value: 750, percent: 15, color: '#0036CB' },
        { name: 'Invalid Account Number', value: 500, percent: 10, color: '#0036CB' },
        { name: 'Others', value: 700, percent: 14, color: '#0036CB' },
    ],
    UPI: [
        { name: 'Customer Declined', value: 2500, percent: 40, color: '#0036CB' },
        { name: 'Mandate Expired', value: 1200, percent: 20, color: '#0036CB' },
        { name: 'Insufficient Balance', value: 1000, percent: 16, color: '#0036CB' },
        { name: 'Bank Timeout', value: 800, percent: 13, color: '#0036CB' },
        { name: 'Others', value: 700, percent: 11, color: '#0036CB' },
    ]
};

export default function Chart() {
    const [activeIndex, setActiveIndex] = useState(0); // default to first item, like the screenshot
    const [tab, setTab] = useState<keyof typeof values>("NACH");
    const data = values[tab] || [];
    const active = data[activeIndex];
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const bars = gsap.utils.selector(containerRef)('.bar_percent');
            gsap.fromTo(
                bars,
                { width: '0%' },
                {
                    width: (i) => `${data[i].percent}%`,
                    duration: 1,
                    ease: 'linear',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        },
        { scope: containerRef, dependencies: [tab] }
    );
    return (
        <div className="w-full mt-2">

            <div className='tb_cnt text-center mb-10'>
                <div className="br_tbs mx-auto  inline-flex p-1 rounded-3xl bg-white shadow-lg border border-[#B3B3B3] w-[180px] gap-0">
                    <button className={`py-2 px-4 rounded-3xl w-[50%] text-center text-sm cursor-pointer font-bold ${tab === "NACH"
                        ? "bg-[#3F89FF33] text-[#004ADE] border border-[#3F89FF]"
                        : "bg-transparent text-[#05132B]"
                        }`} onClick={() => setTab("NACH")}>NACH</button>
                    <button className={`py-2 px-4 rounded-3xl w-[50%] text-center text-sm cursor-pointer font-bold ${tab === "UPI"
                        ? "bg-[#3F89FF33] text-[#004ADE] border border-[#3F89FF]"
                        : "bg-transparent text-[#05132B]"
                        }`} onClick={() => setTab("UPI")}>UPI</button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-0 lg:gap-8 bg-white rounded-xl border border-[#b3b3b3b9] overflow-hidden" ref={containerRef}>
                {/* Left — Donut chart */}
                <div className="relative flex items-center justify-center  bg-[url('/images/factCentre/chartBg.png')] bg-cover bg-center py-5 lg:py-20 px-6">
                    <PieChart width={350} height={350}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={130}
                            outerRadius={170}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={2}
                            style={{ outline: 'none' }}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={entry.name}
                                    fill={entry.color}
                                    stroke="none"

                                    opacity={activeIndex === index ? 1 : activeIndex === null ? 1 : 0.5}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    style={{ cursor: 'pointer', transition: 'opacity 0.2s ease', outline: 'none' }}
                                />
                            ))}
                        </Pie>
                    </PieChart>

                    {/* Center label — updates based on active segment */}
                    <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col items-center justify-center pointer-events-none">
                        <p className="text-6xl font-bold font-mono text-transparent bg-clip-text bg-[linear-gradient(180.24deg,#3333FF_0.21%,#1D1D77_79.1%)]">
                            {active.percent}
                            <span className="text-2xl ms-1">%</span>
                        </p>
                        <p className="text-base font-semibold text-center text-[#383838] mt-1 ">{active.name}</p>
                        <p className="text-xm text-[#666666] mt-0.5">{active.value.toLocaleString()} CASES</p>
                    </div>
                </div>

                {/* Right — list with bars */}
                <div className='bg-white py-10 lg:py-15 px-5 lg:px-10'>
                    <h2 className=" text-xl lg:text-2xl font-medium font-primary text-[#05132B]">{tab == "NACH" ? "NACH Rejection Distribution" : "UPI Failure Distribution"}</h2>
                    <p className="text-xs text-[#67758F] mt-1">{tab == "NACH" ? "5,000 failed debits analysed in the last 30 days" : "6,200 failed collect requests analysed in the last 30 days"}</p>

                    <div className="mt-6 space-y-8">
                        {data.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={item.name}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className="cursor-pointer"
                                >
                                    <div className="flex items-center justify-between text-sm mb-1">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="w-2 h-2 rounded-full shrink-0"
                                                style={{ backgroundColor: "#490E7F" }}
                                            />
                                            <span className={isActive ? 'text-[#404040] font-medium font-primary text-sm' : 'text-gray-500 font-medium font-primary text-sm'}>
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-10 text-xs text-[#404040] font-primary ">
                                            <span>{item.value}</span>
                                            <span className="w-8 text-right">{item.percent}%</span>
                                        </div>
                                    </div>
                                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full  bar_percent"
                                            style={{
                                                width: `0%`,
                                                backgroundColor: "#9035FF",
                                                opacity: isActive ? 1 : 0.6,
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}