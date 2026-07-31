'use client';

import { createContext, useContext, useEffect, useRef } from 'react';
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
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname()
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,
            smoothWheel: true,
            syncTouch: false,
            autoRaf: false,
            stopInertiaOnNavigate: true,
        });

        lenisRef.current = lenis;

        const onScroll = () => ScrollTrigger.update();
        lenis.on('scroll', onScroll);
        const update = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenis.off('scroll', onScroll);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);
    useEffect(() => {
        if (!lenisRef.current) return;

        lenisRef.current.scrollTo(0, {
            immediate: true,
            force: true,
        });

        requestAnimationFrame(() => {
            lenisRef.current?.resize();
            ScrollTrigger.refresh();
        });
    }, [pathname]);
    return (
        <LenisContext.Provider value={lenisRef.current}>
            {children}
        </LenisContext.Provider>
    );
}