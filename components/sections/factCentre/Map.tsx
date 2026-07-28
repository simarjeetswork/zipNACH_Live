'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { clientsByState } from '@/components/sections/factCentre/data';
import { useGSAP, ScrollTrigger, gsap } from '@/lib/gsap/gsap';

const stateCoordinates: Record<string, { x: number; y: number }> = {
    'Andhra Pradesh': { x: 40, y: 75 },
    Bihar: { x: 63, y: 40 },
    Chhattisgarh: { x: 56, y: 50 },
    Delhi: { x: 40, y: 28 },
    Gujarat: { x: 15, y: 50 },
    Haryana: { x: 31, y: 30 },
    Karnataka: { x: 26, y: 75 },
    Kerala: { x: 30, y: 92 },
    Maharashtra: { x: 36, y: 58 },
    Odisha: { x: 60, y: 58 },
    Punjab: { x: 28, y: 20 },
    Rajasthan: { x: 25, y: 40 },
    'Tamil Nadu': { x: 37, y: 93 },
    Telangana: { x: 50, y: 63 },
    'Uttar Pradesh': { x: 48, y: 35 },
    'West Bengal': { x: 65, y: 47 },
};

type TooltipType = {
    left: string;
    top: string;
    state: string;
    client: string;
};

export default function ClientsMap() {
    const [tooltip, setTooltip] = useState<TooltipType | null>(null);
    useEffect(() => {
        const close = () => setTooltip(null);
        window.addEventListener('click', close);
        return () => window.removeEventListener('click', close);
    }, []);
    const mapRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 780px)", () => {
            if (!mapRef.current) return
            gsap.fromTo(
                mapRef.current,
                {
                    x: 350,
                    y: -350,
                    scale: 0.9,
                },
                {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: mapRef.current,
                        start: "top 30%",
                    },
                }
            );
        })
    }
    ), { scope: mapRef, dependencies: [] }
    return (
        <div className="flex justify-end overflow-hidden">
            <div className="relative w-[700px] aspect-square" ref={mapRef}>
                {/* Map */}
                <Image
                    src="/images/factCentre/mapSvg.svg"
                    alt="India Map"
                    preload
                    fill
                    className="object-contain"
                />

                {/* Pins */}
                {Object.entries(clientsByState).flatMap(([state, clients]) => {
                    const point = stateCoordinates[state];

                    if (!point) return [];

                    return clients.map((client, index) => {
                        const spread = 80;

                        const angle = (index * 137.5) * (Math.PI / 180);
                        const radius = Math.min(Math.sqrt(index) * 8, spread);

                        const offsetX = Math.cos(angle) * radius;
                        const offsetY = Math.sin(angle) * radius;

                        const left = `calc(${point.x}% + ${offsetX}px)`;
                        const top = `calc(${point.y}% + ${offsetY}px)`;


                        return (
                            <div
                                key={`${state}-${client}`}
                                className="absolute cursor-pointer"
                                style={{
                                    left,
                                    top,
                                    transform: 'translate(-50%, -100%)',
                                }}
                                onMouseEnter={() =>
                                    setTooltip({
                                        left,
                                        top,
                                        state,
                                        client,
                                    })
                                }
                                onMouseLeave={() => setTooltip(null)}
                                onClick={(e) => {
                                    e.stopPropagation();

                                    setTooltip({
                                        left,
                                        top,
                                        state,
                                        client,
                                    });
                                }}
                            >
                                <div className="relative h-[10] w-[10] sm:w-[15px] sm:h-[15px] hover:scale-110 transition-transform">
                                    <Image
                                        src="/images/factCentre/pin.svg"
                                        alt="Pin"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        );
                    });
                })}

                {/* Desktop */}
                {tooltip && (
                    <div className="hidden md:block">
                        <div
                            className="absolute z-[50] pointer-events-none"
                            style={{
                                left: tooltip.left,
                                top: tooltip.top,
                                transform: "translate(-50%, calc(-100% - 20px))",
                            }}
                        >
                            <div className="rounded-lg bg-gray-800 px-3 py-2 text-xs text-white shadow-xl whitespace-nowrap">
                                <p>{tooltip.client}</p>

                                <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                            </div>
                        </div>
                    </div>
                )}
                {/* Mobile */}
                {tooltip && (
                    <div className="absolute inset-0 left-0 right-0 z-[100] flex items-center justify-center md:hidden">
                        {/* Background */}
                        <div
                            className="absolute inset-0"
                            onClick={() => setTooltip(null)}
                        />

                        {/* Card */}
                        <div className="relative z-10 mx-6 w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl">

                            <p className="mt-2 text-sm text-gray-600">
                                {tooltip.client}
                            </p>

                            <button
                                onClick={() => setTooltip(null)}
                                className="mt-5 w-full rounded-lg bg-gray-900 py-2 text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}