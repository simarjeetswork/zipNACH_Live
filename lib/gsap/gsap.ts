import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";
// Registring GSAP and trigger for each usecase 
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);
if (typeof window !== "undefined") {
    window.addEventListener("load", () => ScrollTrigger.refresh());
}
export { gsap, ScrollTrigger, useGSAP, ScrollToPlugin };