"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerRefresh() {
    const pathname = usePathname();
    useEffect(() => {

        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
    }, [pathname]);

    return null;
}