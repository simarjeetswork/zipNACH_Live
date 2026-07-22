"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Footer from "./Footer";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "ZipNACH Models", href: "/models" },
  { name: "Trust Centre", href: "/trust-centre" },
  { name: "Fact Centre", href: "/fact-centre" },
];

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="relative border-b border-[#B3B3B366] bg-white z-2">
      <div className="container flex h-[68px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo.svg"
            alt="ZipNACH"
            width={140}
            height={36}
            priority
            className="w-[110px] md:w-[140px] h-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden h-full items-center lg:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex h-full items-center px-5 xl:px-8 text-[14px] whitespace-nowrap transition-colors font-mono font-normal ${active
                    ? "border-t-[4px] border-[#3F89FF] bg-gradient-to-b from-[#3F89FF]/20 to-white text-[#000000CC]"
                    : "border-t-[4px] hover:border-[#3F89FF] border-transparent text-[#000000CC] hover:bg-gradient-to-b from-[#3F89FF]/20 to-white"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-block rounded-md border-[2px] border-[#3F89FF] px-5 py-2 text-sm font-medium text-[var(--color-primary)] transition hover:bg-[#2563EB] hover:text-[#004ADE] font-semibold "
        >
          Contact Us
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex items-center justify-center rounded-md p-2 text-[#004ADE] lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${mobileOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex h-[68px] shrink-0 items-center justify-between px-4 md:px-8">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/logo.svg"
              alt="ZipNACH"
              width={130}
              height={34}
              className="h-auto w-[110px]"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center rounded-md p-2 text-black"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-6 pt-6">
          {/* nav links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{ transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : "0ms" }}
                className={`w-fit py-2 text-[28px] font-medium font-mono text-[#000000CC] transition-all duration-300 ease-out ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* divider */}
          <div
            className={`my-8 h-px w-full bg-gray-200 transition-opacity duration-500 ${mobileOpen ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: mobileOpen ? "340ms" : "0ms" }}
          />
          <div
            className={`transition-all duration-500 ${mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
              }`}
            style={{ transitionDelay: mobileOpen ? "350ms" : "0ms" }}
          >

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block rounded-md border-2 border-[#3F89FF] bg-[#3F89FF] px-5 py-3 text-center text-base font-semibold text-white transition hover:bg-[#2563EB] hover:border-[#2563EB]"
            >
              Contact Us
            </Link>
          </div>


        </div>
      </div>
    </header>
  );
}

export default Header