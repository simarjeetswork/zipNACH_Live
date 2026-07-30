// components/SmoothScrollProvider.tsx
'use client';

import { useEffect, useRef, useState, createContext, useContext } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from '@/lib/gsap/gsap';
import { usePathname } from 'next/navigation';

const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

export default function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            lerp: 0.08,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.5,
            smoothWheel: true,
            syncTouch: false,
            autoRaf: false, // critical: prevents Lenis's own internal rAF loop from fighting GSAP's ticker
        });

        lenisRef.current = lenisInstance;
        setLenis(lenisInstance); // triggers re-render -> context updates
        lenisInstance.on('scroll', ScrollTrigger.update);
        const tickerCallback = (time: number) => {
            lenisInstance.raf(time * 700);
        };
        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tickerCallback);
            lenisInstance.destroy();
            lenisRef.current = null;
            setLenis(null);
            ScrollTrigger.killAll();
        };
    }, []);

    useEffect(() => {

        const currentLenis = lenisRef.current;
        if (!currentLenis) return;
        currentLenis.scrollTo(0, { immediate: true });
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // guard: instance may have been torn down between the rAFs (e.g. fast nav/unmount)
                if (!lenisRef.current) return;
                lenisRef.current.resize();
                ScrollTrigger.refresh();
            });
        });
    }, [pathname]);

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
}