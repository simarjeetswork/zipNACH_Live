import Image from "next/image";
import Link from "next/link";

const navLinks = [
  "HOME",
  "ZIPNACH MODELS",
  "TRUST CENTRE",
  "FACT CENTRE",
];

export default function Footer() {
  return (
    <footer className="overflow-hidden pt-10 md:pt-16">
      {/* Background */}
      <Image src="/images/footer-bg.png" alt="" fill className="-z-10 object-cover"/>
      <div className="container relative z-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* Left */}
          <div className="max-w-[546px]">
            <Image src="/images/logo.svg" alt="ZipNACH" width={140} height={36} />
            <p className="mt-4 leading-[160%] text-[var(--text-gray)] ">
              Operational intelligence infrastructure for NACH mandate
              validation, digitization and automation — built for banks,
              NBFCs and fintechs.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-x-10 gap-y-4 text-[var(--text-gray)]">
              <div className="flex items-center gap-3">
                 <Image src="/images/email-icon.svg" alt="Email" width={19} height={15} />
                 <span>sales@yoekisoft.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Image src="/images/phone-icon.svg" alt="Phone" width={19} height={15} />
                <span>(+91)-120-4237934, (+91)-8448120153</span>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="font-primary font-regular text-[#05132B]">
                Connect with us:
              </span>

              <Link href="https://www.linkedin.com/company/yoekisoftpvtltd/" target="_blank">
               <Image src="/images/linkedin.svg" alt="Phone" width={24} height={24} />
              </Link>

              <Link href="https://www.youtube.com/@Yoekisoft" target="_blank">
                  <Image src="/images/youtube.svg" alt="Phone" width={24} height={24} />
              </Link>
            </div>
          </div>

          {/* Right Navigation */}
          <nav className="flex flex-wrap justify-start gap-4 xl:gap-8 text-[14px] font-[400] uppercase text-[var(--text-gray)] lg:justify-end">
            {navLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="transition-colors duration-300 hover:text-[#004ADE]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative mt-16 flex justify-center pb-1">
           <Image src="/images/zipnach.png" alt="Phone" width={802} height={288} />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5E7EB] pt-[12px] pb-[24px] text-center text-[var(--text-gray)]  flex items-center justify-center gap-3">
          <Link href="https://yoekisoft.com/" target="_blank">
              <Image src="/images/yoeki-footer.svg" alt="Phone" width={90} height={22} />
          </Link>
          <span> - The team behind </span>
          <span className="text-[#08376B]">zipNACH</span>
        </div>
      </div>
    </footer>
  );
}