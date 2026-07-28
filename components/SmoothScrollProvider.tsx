// components/SmoothScrollProvider.tsx
'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

export default function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname()
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            lerp: 0.08,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.5,
            smoothWheel: true,
            syncTouch: false,
        });

        setLenis(lenisInstance); // triggers re-render -> context updates

        lenisInstance.on('scroll', ScrollTrigger.update);

        const tickerCallback = (time: number) => {
            lenisInstance.raf(time * 1000);
        };
        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tickerCallback);
            lenisInstance.destroy();
            setLenis(null);
        };
    }, []);
    useEffect(() => {
        if (!lenis) return;

        requestAnimationFrame(() => {
            lenis.scrollTo(0, {
                immediate: true,
            });

            lenis.resize();
            ScrollTrigger.refresh();
        });
    }, [pathname]);
    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
}