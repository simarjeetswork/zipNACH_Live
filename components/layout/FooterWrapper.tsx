// components/layout/FooterWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
    const pathname = usePathname();
    return <Footer key={pathname} />;
}