
"use client";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import Heading from "@/components/ui/Heading";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// export const metadata: Metadata = {
//   title: "ZipNach-Contact Us",
// };
export default function Contact() {
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  useGSAP(

    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.set(infoRef.current, {
          x: 150,
          zIndex: 1,
        });
        gsap.set(formRef.current, {
          x: -150,
          zIndex: 1,
        });

        gsap.set(formRef.current, {
          zIndex: 2,
        });
      });

      return () => mm.revert();
    },
    { scope: contactRef });
  const reveal = () => {
    if (window.innerWidth < 1024) return;

    gsap.to(infoRef.current, {
      x: 40,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(formRef.current, {
      x: 0,
      duration: 0.8,
      ease: "power3.out",
    });

  };
  return (
    <>
      <section className="pt-28 pb-15 px-6 relative overflow-hidden" ref={contactRef}>
        <div className="container mx-auto">
          <div className="text-center">
            <AnimatedText as="p" className="text-blue text-start text-xs sm:text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-7">ZIPNACH FOR ENTERPRISE</AnimatedText>
            <Heading as="h1" className="mb-2 text-3xl sm:text-5xl xl:text-6xl leading-[110%] text-center font-medium font-primary text-heading">Connect With Our<span className="text-primary">Team.</span></Heading>
            <AnimatedText
              as="p"
              delay={0.2}
              className="text-para mb-10"
            >
              Whether you're evaluating eNACH, UPI AutoPay, or large-scale
              recurring collections, our team can <br className="hidden xl:block" /> help you choose the right
              setup and get started quickly.
            </AnimatedText>
          </div>

          <div className="relative grid gap-8 justify-center grid-cols-1 lg:grid-cols-[40%_60%] items-center max-w-[1100px] mx-auto ">
            <div
              ref={infoRef}
              onClick={reveal}
              className="w-full xl:top-[55px]"
            >
              <ContactInfo />
            </div>

            <div
              ref={formRef}
              onClick={reveal}
              className="relative"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
