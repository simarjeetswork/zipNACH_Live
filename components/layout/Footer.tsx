"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridBackground from "../ui/GridBackground";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Fact Centre", href: "/fact-centre" },
  { name: "ZipNACH Models", href: "/models" },
  { name: "Trust Centre", href: "/trust-centre" },
];


export default function Footer() {
  const footerImgRef = useRef<HTMLImageElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.fromTo(
      footerImgRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.7,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true
        },
      }
    );
  }, { scope: footerRef, dependencies: [] });
  ScrollTrigger.refresh()
  return (
    <footer className="relative overflow-hidden px-6 pt-15" ref={footerRef}>
      {/* Background */}
      <GridBackground />
      <div className="container relative z-1">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* Left */}
          <div className="max-w-[546px]">
            <Image
              src="/images/logo.svg"
              alt="ZipNACH"
              width={120}
              height={36}
            />
            <p className="mt-4 leading-[160%] text-base text-gray ">
              Operational intelligence infrastructure for NACH mandate
              validation, digitization and automation — built for banks, NBFCs
              and fintechs.
            </p>
            <div className="mt-8 flex flex-col gap-x-10 gap-y-4 text-gray md:flex-row">
              {/* Email */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/email-icon.svg"
                  alt="Email"
                  width={19}
                  height={15}

                />
                <Link
                  href="mailto:sales@yoekisoft.com"
                  className="transition-colors hover:text-[#004ADE]"
                >
                  sales@yoekisoft.com
                </Link>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/phone-icon.svg"
                  alt="Phone"
                  width={19}
                  height={15}
                />
                <div className="flex flex-wrap items-center gap-1">
                  <a
                    href="tel:+911204237934"
                    className="transition-colors hover:text-[#004ADE]"
                  >
                    (+91)-120-4237934
                  </a>
                  <span>,</span>
                  <a
                    href="tel:+918448120153"
                    className="transition-colors hover:text-[#004ADE]"
                  >
                    (+91)-8448120153
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="font-primary font-regular text-[#05132B]">
                Connect with us:
              </span>

              <Link
                href="https://www.linkedin.com/company/yoekisoftpvtltd/"
                target="_blank"
                className="transition-transform duration-300 hover:scale-120"
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="https://www.youtube.com/@Yoekisoft" target="_blank" className="transition-transform duration-300 hover:scale-120">
                <Image
                  src="/images/youtube.svg"
                  alt="Phone"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="flex flex-wrap justify-start gap-4 xl:gap-8 text-sm uppercase text-[var(--color-gray)] lg:justify-end ">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors duration-300 hover:text-[#004ADE] font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="relative mt-16 flex justify-center pb-1" ref={footerImgRef}
        >
          <Image
            src="/images/zipnach.png"
            alt="ZipNACH"
            width={802}

            height={288}
          />
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-[#E5E7EB] pt-[12px] pb-[24px] text-center text-[var(--color-gray)]  flex flex-column md:flex-row items-center justify-center md:gap-3">
          <Link href="https://yoekisoft.com/" target="_blank">
            <Image
              src="/images/yoeki-footer.svg"
              alt="Phone"
              width={90}
              height={22}
            />
          </Link>
          <div>
            <span> - The team behind </span>
            <span className="text-[#08376B]">zipNACH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
