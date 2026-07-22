// components/ui/AnimatedButton.tsx
'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@/lib/gsap/gsap';
import { gsap } from '@/lib/gsap/gsap';

const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline: 'border border-blue text-blue bg-transparent hover:bg-blue/10',
};

export default function AnimatedButton({
    children,
    variant = 'primary',
    className = '',
    delay = 0,
    href,
    onClick,
    type = 'button',
}: {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    delay?: number;
    href?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}) {
    const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

    useGSAP(() => {
        if (!ref.current) return;
        gsap.from(ref.current, {
            opacity: 0,
            y: 40,
            delay: delay,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });
    }, { scope: ref,dependencies: [] });


    const classes = `px-6 py-[10px] rounded-[4px] font-sans cursor-pointer text-center ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} ref={ref} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button ref={ref} type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}