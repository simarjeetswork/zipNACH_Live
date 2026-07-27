
"use client";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import Heading from "@/components/ui/Heading";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Metadata } from "next";
import { useRef } from "react";

export const metadata: Metadata = {
  title: "ZipNach-Contact Us",
};
export default function Contact() {
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      gsap.set(infoRef.current, {
        x: 220,
        zIndex: 1,
      });

      gsap.set(formRef.current, {
        zIndex: 2,
      });
    });

    return () => mm.revert();
  });
  const reveal = () => {
    if (window.innerWidth < 1280) return;

    gsap.to(infoRef.current, {
      x: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };
  return (
    <>
      <main className="pt-[80px] pb-[100px]">
        <div className="container max-w-[1117px]">
          <div className="mx-auto max-w-[742px] text-center">
            <span className="inline-flex rounded-full bg-[#3F89FF1A] px-4 py-1 text-[14px] font-normal uppercase text-[#3F89FF] font-primary mb-[20px] md:mb-[40px]">
              ZIPNACH FOR ENTERPRISE
            </span>
            <Heading
              as="h3"
              className="mb-0 text-[36px] font-semibold font-primary text-[var(--color-heading)] md:text-[56px] leading-[120%]"
            >
              Connect With Our{" "}
              <span className="text-[var(--color-primary)]">Team</span>
            </Heading>
            <AnimatedText
              as="p"
              delay={0.2}
              className="text-[var(--color-para)] mb-[22px] md:mb-[48px]"
            >
              Whether you're evaluating eNACH, UPI AutoPay, or large-scale
              recurring collections, our team can help you choose the right
              setup and get started quickly.
            </AnimatedText>
          </div>

          <div className="relative grid gap-8 xl:grid-cols-[632px_minmax(0,1fr)] items-center">
            <div
              ref={infoRef}
              onClick={reveal}
              className="w-full xl:absolute xl:left-[-55px] xl:top-[55px] xl:w-[485px]"
            >
              <ContactInfo />
            </div>

            <div
              ref={formRef}
              onClick={reveal}
              className="relative w-full xl:ml-[430px] xl:w-[632px]"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
