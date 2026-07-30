import Heading from "@/components/ui/Heading";
import AnimatedButton from "@/lib/gsap/animations/AnimateButton";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import { ArrowUpRight } from "lucide-react";

export default function HeroFact() {
    return (
        <>
            <section className="fxt_hr_x pt-28 pb-25 px-6 relative  bg-[#F1F7FF] overflow-hidden min-h-dvh flex items-center">
                <div className="absolute left-0 top-0 w-full h-full bx_ptrn"></div>
                <div className="container mx-auto">
                    <div className="relative z-1 w-full text-center">
                        <AnimatedText as="p" className="text-blue text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-7">Fact Centre</AnimatedText>
                        <Heading as="h1" className="mb-2 text-3xl sm:text-5xl xl:text-6xl leading-[110%] text-center font-medium font-primary text-heading">Trusted by Enterprises<br className="block" /><span className="text-primary">Proven by Numbers.</span></Heading>
                        <AnimatedText as="p" delay={0.2} className="text-para text-center text-base leading-[160%] font-normal mb-7">Trusted by banks, NBFCs, enterprises, and fintechs to simplify secure <br className="hidden sm:block" /> mandate management and collections.</AnimatedText>
                        <div className="flex gap-4 flex-col justify-center sm:flex-row mt-10 sm:mt-10">
                            <AnimatedButton variant="primary" className="flex gap-2 text-base font-semibold text-center justify-center items-center" delay={0.3}>Explore the Facts <span> <ArrowUpRight size={18} /> </span></AnimatedButton>
                            <AnimatedButton variant="outline" className=" text-base font-semibold text-center" delay={0.3}>View the ecosystem</AnimatedButton>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-auto"><img src="/images/factCentre/shape.png" alt="Shape" className="w-full" /></div>
            </section>
        </>
    )
}