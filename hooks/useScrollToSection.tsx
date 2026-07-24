// lib/gsap/hooks/useScrollToSection.ts
'use client';
import { useCallback } from 'react';
import { gsap } from '@/lib/gsap/gsap';

const NAV_HEIGHT = 80; // adjust to your actual nav height, or pass as param

export function useScrollToSection(offsetY: number = NAV_HEIGHT) {
    const scrollToSection = useCallback(
        (id: string) => {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: `#${id}`,
                    offsetY,
                },
                ease: 'power3.inOut',
            });
        },
        [offsetY]
    );

    return scrollToSection;
}