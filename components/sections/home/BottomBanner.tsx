import AnimatedText from "@/lib/gsap/animations/AnimateText";
import AnimatedButton from "@/lib/gsap/animations/AnimateButton";
import { SquarePlay } from "lucide-react";
import Heading from "@/components/ui/Heading";

export default function BottomBanner() {
    return (
        <>
            <section className="prc_md bg-[url('/images/pricing_bg.webp')] bg-cover bg-no-repeat bg-center py-12 md:py-25 px-6 relative">
                <div className="container mx-auto">
                    <div className="relative z-2 text-center">
                        <Heading as="h3" className="mb-3 text-2xl leading-[110%] text-center font-medium font-primary text-white md:text-[46px]">Powering Smarter <br /><span className="text-[#3F89FF]">Collection Operationss</span> </Heading>
                        <AnimatedText as="p" delay={0.2} className=" text-center w-full text-base leading-[160%] font-normal mb-7 text-white/60">Automate validation, reduce rejection, and streamline mandate <br /> workflows with zipNACH.</AnimatedText>
                        <div className="flex gap-4 flex-col md:flex-row justify-center mt-12">
                            <AnimatedButton variant="primary" className="flex  gap-2 text-base font-semibold text-center items-center" delay={0.3}>Schedule a Demo <span><SquarePlay /></span></AnimatedButton>
                            <AnimatedButton variant="outline" className=" text-base font-semibold text-center" delay={0.3}>Contact Us</AnimatedButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}