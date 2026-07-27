import AnimatedText from "@/lib/gsap/animations/AnimateText";
import Heading from "../ui/Heading";
import AnimatedButton from "@/lib/gsap/animations/AnimateButton";
import { ArrowUpRight } from "lucide-react";

export default function PricingModel(){
return (
<>
<section className="prc_md bg-[url('/images/pricing_bg.webp')] bg-cover bg-no-repeat bg-center py-20 px-6 relative">
<div className="bx_ptrn absolute w-full h-full inset-0"></div>
    <div className="container mx-auto">
        <div className="relative z-2 text-center">
            <Heading as="h3" className="mb-3 text-5xl leading-[110%] text-center font-medium font-primary text-white">Let's find the right Pricing model for <br /> your operations.</Heading>
            <AnimatedText as="p" delay={0.2} className=" text-center w-full text-base leading-[160%] font-normal mb-7 text-white/60">Talk to our team about mandate volumes, integrations, onboarding, and <br /> supported channels.</AnimatedText>
            <div className="flex gap-4 flex-row justify-center mt-12">
                <AnimatedButton variant="primary" className="flex  gap-2 text-base font-semibold text-center items-center" delay={0.3}>Talk to our solution Team <span> <ArrowUpRight size={18} /> </span></AnimatedButton>
                <AnimatedButton variant="outline" className=" text-base font-semibold text-center" delay={0.3}>Compare Plans</AnimatedButton>
            </div>
        </div>
    </div>
</section>
</>
)
}