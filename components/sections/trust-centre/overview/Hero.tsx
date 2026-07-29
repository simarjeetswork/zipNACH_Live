import Heading from "@/components/ui/Heading";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F1F7FF] pt-30 pb-15 px-6">
      {/* Background Pattern */}
      <Image
        src="/images/trust-hero-bg.png"
        alt=""
        fill
        preload
        className="z-1 object-cover"
      />

      <div className="container relative z-2">
        <div className="mx-auto flex  flex-col items-center text-center">
          {/* Badge */}
          <AnimatedText as="p" className="text-blue text-start text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-7">Trust Centre</AnimatedText>

          {/* Heading */}
          <Heading
            className="md:text-5xl text-3xl font-light leading-[100%] text-white lg:text-6xl font-primary mb-2"
            as="h1"
          >
            Security Commitment</Heading>

          <div className="space-y-2">
            <AnimatedText
              as="p"
              delay={0.2}
              className=" text-xs sm:text-sm leading-[180%] text-[#FFFFFFCC]"
            >
              Security, privacy, availability, and reliability are fundamental
              to the design and operation of the ZipNACH platform. We implement
              industry-recognized security <br className="xl:block hidden" /> controls, operational processes, and
              continuous monitoring to safeguard customer data, maintain service
              availability, and support regulatory compliance.
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.2}
              className="text-xs sm:text-sm leading-[180%] text-[#FFFFFFCC]"
            >
              Our controls are organized below as a living register, grouped by
              function. This isn't exhaustive — it reflects the commitments we
              lead with, and our full <br className="xl:block hidden" /> documentation goes deeper on each.
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
