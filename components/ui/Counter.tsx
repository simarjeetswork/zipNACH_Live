// components/ui/Counter.tsx
'use client';
import { useRef } from 'react';
import { useGSAP, gsap } from '@/lib/gsap/gsap';

export default function Counter({
    end,
    suffix = '',
    duration = 2,
    decimals = 0,
    className = '',
    delay,
}: {
    end: number;
    suffix?: string;
    duration?: number;
    decimals?: number;
    className?: string;
    delay?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        const counter = { value: 0 };

        gsap.to(counter, {
            value: end,
            duration,
            ease: 'power2.out',
            delay: delay,
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            onUpdate: () => {
                if (ref.current) {
                    ref.current.textContent = counter.value.toFixed(decimals) + suffix;
                }
            },
        });
    }, { scope: ref, dependencies: [] });

    return (
        <span ref={ref} className={className}>
            0{suffix}
        </span>
    );
}