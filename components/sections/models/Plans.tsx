import AnimatedText from "@/lib/gsap/animations/AnimateText";
import Heading from "@/components/ui/Heading";

export default function Plans(){
return (
<>
<section className="prc_md  py-20 px-6 relative">
    <div className="container mx-auto">
        <div className="relative z-2 text-start">
                                    <AnimatedText as="p" className="text-blue text-start text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-7">Plans</AnimatedText>
                               <Heading as="h3" className="mb-3 text-5xl leading-[110%] text-start font-light font-primary text-heading">What’s included across <br />
Models.</Heading>
                             
                           </div>
    </div>
</section>
</>

)

}