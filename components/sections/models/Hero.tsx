import Heading from "@/components/ui/Heading";
import AnimatedButton from "@/lib/gsap/animations/AnimateButton";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import { ArrowUpRight } from "lucide-react";
import HeroUsp from "./HeroUsp";

export default function Hero() {

    return (
        <>
            <section className="mod_hr_x pt-28 pb-15 px-6 relative bx_ptrn overflow-hidden h-dvh flex items-center">
                <div className="blr_spr absolute -right-4 -top-4 bg-[#3f89ff48] rounded-full blur-3xl z-0 w-[180px] h-[180px]"></div>
                <div className="container mx-auto ">
                    <div className="relative z-1 max-w-[800px]">
                        <AnimatedText as="p" className="text-blue text-start text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-7">Zipnach modelS</AnimatedText>
                        <Heading as="h1" className="mb-2 text-3xl sm:text-5xl xl:text-6xl leading-[110%] text-start font-medium font-primary text-heading"><span className="text-primary">Flexible</span> Deployment. <br className=" hidden sm:block" />
                            Enterprise-Grade<span className="text-primary"> Control.</span></Heading>
                        <AnimatedText as="p" delay={0.2} className="text-para text-start text-base leading-[160%] font-normal mb-7 max-w-[700px]">We value your business. Choose the deployment model that best fits your infrastructure, governance, and scalability needs.</AnimatedText>
                        <div className="flex gap-4 flex-col sm:flex-row mt-12 sm:mt-15">
                            <AnimatedButton variant="primary" className="flex  gap-2 text-base font-semibold text-center justify-center items-center" delay={0.3}>Talk to our solution Team <span> <ArrowUpRight size={18} /> </span></AnimatedButton>
                            <AnimatedButton variant="outline" className=" text-base font-semibold text-center" delay={0.3}>Compare Deployments</AnimatedButton>
                        </div>
                    </div>
                    <HeroUsp />

                </div>
            </section>
        </>
    )
}