import Heading from "@/components/ui/Heading";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F1F7FF] pt-[40px] pb-[40px] md:pt-[64px] md:pb-[80px]">
      {/* Background Pattern */}
      <Image
        src="/images/trust-hero-bg.png"
        alt=""
        fill
        priority
        className="z-1 object-cover"
      />

      <div className="container relative z-2">
        <div className="mx-auto flex max-w-[1052px] flex-col items-center text-center">
          {/* Badge */}
          <div className="md:mb-[36px] mb-[18px] rounded-full bg-[#0D4EB0]/20 px-4 py-1">
            <span className="text-sm font-semibold uppercase uppercase text-[var(--border-blue)]">
              Trust Centre
            </span>
          </div>

          {/* Heading */}
          <Heading
            className="md:text-4xl text-3xl font-light leading-[100%] text-white lg:text-[64px] font-primary mb-0"
            as="h1"
          >
            {" "}
            Security Commitment
          </Heading>

          <div className="space-y-2">
            <AnimatedText
              as="p"
              delay={0.2}
              className="text-sm leading-[180%] text-[#FFFFFFCC]"
            >
              Security, privacy, availability, and reliability are fundamental
              to the design and operation of the ZipNACH platform. We implement
              industry-recognized security controls, operational processes, and
              continuous monitoring to safeguard customer data, maintain service
              availability, and support regulatory compliance.
            </AnimatedText>
            <AnimatedText
              as="p"
              delay={0.2}
              className="text-sm leading-[180%] text-[#FFFFFFCC]"
            >
              Our controls are organized below as a living register, grouped by
              function. This isn't exhaustive — it reflects the commitments we
              lead with, and our full documentation goes deeper on each.
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
