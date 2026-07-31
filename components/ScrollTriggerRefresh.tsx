'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from '@/lib/gsap/gsap';
import { useLenis } from './SmoothScrollProvider';

export default function ScrollRefresh() {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        requestAnimationFrame(() => {
            lenis?.scrollTo(0, {
                immediate: true,
                force: true,
            });

            requestAnimationFrame(() => {
                lenis?.resize();
                ScrollTrigger.refresh();
            });
        });
    }, [pathname, lenis]);

    return null;
}