"use client";
import Chip from "@/components/ui/Chip";
import Heading from "@/components/ui/Heading";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

const mandateCards = [
  {
    tag: "TRADITIONAL PAPER-BASED AUTHORIZATION",
    title: "Physical NACH",
    description:
      "Digitize physical mandate processing to reduce paperwork, improve operational efficiency, and simplify offline customer onboarding.",
    image: "/images/physical-nach.png",
    rotate: "-rotate-[4deg]",
    translate: "translate-y-20",
  },
  {
    tag: "PAPERLESS DIGITAL AUTHORIZATION",
    title: "Aadhaar e-Sign",
    description:
      "Enable paperless mandate registration with Aadhaar eSign for faster, secure, and fully digital customer onboarding.",
    image: "/images/e-sign.png",
    rotate: "-rotate-[2deg]",
    translate: "translate-y-10",
  },
  {
    tag: "IFSC, MICR & PARTICIPANT CHECKS",
    title: "E-Mandate",
    description:
      "Offer instant digital mandate registration using Debit Card, Net Banking, Aadhaar OTP, PAN, or Customer ID.",
    image: "/images/e-mandate.png",
    rotate: "rotate-[1deg]",
    translate: "translate-y-10",
  },
  {
    tag: "APPROVE USING ANY UPI APP",
    title: "UPI Mandate",
    description:
      "Enable customers to authorize recurring payment mandates securely through any UPI app with real-time registration.",
    image: "/images/upi-mandate.png",
    rotate: "rotate-[4deg]",
    translate: "translate-y-20",
  },
];

export default function MandateCoverage() {
  gsap.registerPlugin(ScrollTrigger);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  useGSAP(() => {
    if (window.innerWidth < 1540) return;

    const xOffsets = [-30, -10, 10, 30];

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.to(card, {
        x: xOffsets[index],
        rotation: 0,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToSection = useScrollToSection();
  useGSAP(
    () => {
      const box = gsap.utils.selector(containerRef);
      ScrollTrigger.batch(box(".mdt_bx"), {
        start: "top 80%",
        once: true,
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            },
          );
        },
      });
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <section className="3xl:pt-[80px] mb-8 3xl:mb-1 px-3">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-[#3F89FF33] bg-white">
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(92,143,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(92,143,255,.08) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
            }}
          />
          <div className="relative z-8 px-6 pt-14">
            <div className="text-center mb-[48px]">
              <Chip label="Mandate Coverage" />
              <Heading
                as="h3"
                className="mt-6 text-2xl sm:text-4xl xl:text-5xl font-light leading-[120%] text-[#052B63]"
              >
                One platform for every {" "}
                <br className="hidden lg:block" />
                <span className="font-semibold text-[#004ADE]">
                  mandate workflow.
                </span>
              </Heading>
            </div>

            <div className="hidden 3xl:flex items-end justify-center gap-0 overflow-hidden">
              {mandateCards.map((card, index) => (
                <div
                  key={card.title}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={`relative h-[520px] w-[318px] text-center rounded-t-xl border border-[#E6ECF8] bg-[#ECEFFD] px-8 pt-6 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.10)] ${card.rotate} ${card.translate}`}
                >
                  <p className="mb-4 text-[10px] font-mono font-regular uppercase tracking-[0.18em] uppercase text-[#032656]">
                    {card.tag}
                  </p>
                  <h3 className="text-[20px] font-primary text-[#383838] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-7 text-[#67758F]">
                    {card.description}
                  </p>
                  <div>
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={220}
                      className="mx-auto w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-end justify-center w-full gap-4 pb-12 3xl:hidden" ref={containerRef}>
              {mandateCards.map((card) => (
                <div
                  key={card.title}
                  className={`mdt_bx relative text-center h-[520px] opacity-0 w-full sm:w-[318px] rounded-xl border border-[#E6ECF8] bg-[#ECEFFD] px-8 pt-6 shadow-[2px_2px_12px_0px_rgba(0,0,0,0.10)]`}
                >
                  <p className="mb-4 text-[10px] font-mono font-regular uppercase tracking-[0.18em] uppercase text-[#032656]">
                    {card.tag}
                  </p>
                  <h3 className="text-[20px] font-primary text-[#383838] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-7 text-[#67758F]">
                    {card.description}
                  </p>
                  <div>
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={300}
                      height={220}
                      className="mx-auto w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
