// components/sections/analytics/NachRejectionChart.tsx
'use client';
import { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Insufficient Funds', value: 1800, percent: 36, color: '#004ADE' },
    { name: 'Account Closed', value: 1250, percent: 25, color: '#8B5CF6' },
    { name: 'Signature Mismatch', value: 750, percent: 15, color: '#A78BFA' },
    { name: 'Invalid Account Number', value: 500, percent: 10, color: '#C4B5FD' },
    { name: 'Others', value: 700, percent: 14, color: '#DDD6FE' },
];

export default function Chart() {
    const [activeIndex, setActiveIndex] = useState(0); // default to first item, like the screenshot

    const active = data[activeIndex];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-8 bg-white rounded-xl border border-[#B3B3B3] overflow-hidden">
            {/* Left — Donut chart */}
            <div className="relative flex items-center justify-center rounded-lg">
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={90}
                        outerRadius={130}
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={2}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={entry.name}
                                fill={entry.color}
                                stroke="none"
                                opacity={activeIndex === index ? 1 : activeIndex === null ? 1 : 0.5}
                                onMouseEnter={() => setActiveIndex(index)}
                                style={{ cursor: 'pointer', transition: 'opacity 0.2s ease' }}
                            />
                        ))}
                    </Pie>
                </PieChart>

                {/* Center label — updates based on active segment */}
                <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-4xl font-bold text-primary">
                        {active.percent}
                        <span className="text-2xl">%</span>
                    </p>
                    <p className="text-sm font-semibold text-heading mt-1">{active.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{active.value.toLocaleString()} CASES</p>
                </div>
            </div>

            {/* Right — list with bars */}
            <div>
                <h2 className="text-2xl font-heading text-heading">NACH Rejection Distribution</h2>
                <p className="text-xs text-gray-400 mt-1">5,000 failed debits analysed in the last 30 days</p>

                <div className="mt-6 space-y-4">
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
                                            className="w-2 h-2 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <span className={isActive ? 'text-heading font-medium' : 'text-gray-500'}>
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                        <span>{item.value}</span>
                                        <span className="w-8 text-right">{item.percent}%</span>
                                    </div>
                                </div>
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-300"
                                        style={{
                                            width: `${item.percent}%`,
                                            backgroundColor: item.color,
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
    );
}