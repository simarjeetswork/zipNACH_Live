// components/ui/AnimatedText.tsx
'use client';
import { useRef, ElementType } from 'react';
import { useGSAP } from '@/lib/gsap/gsap';
import { gsap } from '@/lib/gsap/gsap';

export default function AnimatedText({
    children,
    as: Tag = 'p',
    className = '',
}: {
    children: React.ReactNode;
    as?: ElementType;
    className?: string;
}) {
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!ref.current) return;
        gsap.from(ref.current, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
            },
        });
    }, { scope: ref });

    return <Tag ref={ref} className={className}>{children}</Tag>;
}