import Image from "next/image"
import Button from "@/components/ui/Button"

function Hero (){
    return (
        <>
        <div className="mt-[68px] flex items-center justify-center">
            <Image src='/images/hero-banner.png' alt="ZipNach" fill priority className="z-[-1]" />
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center">
                    <h5 className="max-w-[623px] w-full border border-[#CACAFF] flex items-center justify-center uppercase rounded-[35px] text-[10px] md:text-sm text-[#3535DD] font-mono bg-white lg:mb-[40px] md:mb-[22px] mb-[16px] p-1">End-to-End Mandate Management → From authentication to reconciliation</h5>
                    <h2 className="max-w-[958px] mb-3 leading-[120%] text-[var(--text-heading-dark)] font-primary font-medium text-[26px] md:text-[46px] lg:text-[56px]">Authenticate, Digitize and Automate your NACH Mandate.</h2>
                    <p className="max-w-[704px] text-[var(--text-gray)] mb-[16px] md:mb-[45px] lg:mb-[75px] text-xs md:text-[16px]">Digitize your entire recurring process. Enables corporates to use their interface or application with the benefits of zipNACH platform.</p>
                </div>
            </div>
        </div>

        {/* Diagonal design section */}
        <section className="relative overflow-hidden pb-24 md:pb-32 px-2 flex flex-col items-center justify-center">
          <div className="mb-[22px] md:mb-[78px] lg:mb-[78px]">
            <Button label="Schedule a Demo" endIcon="/images/play-icon.svg" />
          </div>
          {/* diagonal split background */}
          <div className="relative bg-none" />
          <div
            className="absolute inset-0 bg-[#F2F7FF]"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0% 100%)",
            }}
          />
           <svg className="absolute inset-0 -z-[1] h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="100" y1="0" x2="0" y2="100" stroke="#3F89FF" strokeWidth="1" vectorEffect="non-scaling-stroke" />
           </svg>

          {/* small rotated accent square, bottom-left, echoes the screenshot */}
          <div className="absolute right-0 top-[1px] h-3 w-3 bg-[#004ADE] rounded-[3px] animate-diagonal-travel z-1" style={{ transform: "translate(-50%, -50%)" }} />

          <div className="container relative z-1">
            <div className="mx-auto max-w-[820px] rounded-[24px] bg-[#FFFFFF1A] p-[12px] shadow-[2px_2px_12px_0px_#0000001A] backdrop-blur-sm">
                <img
                  src="/images/card-img1.png"
                  alt="Mandate processing flow"
                  className="h-[300px] w-full  md:h-[460px] shadow-[2px_2px_12px_0px_#0000001A] overflow-hidden rounded-[20px]"
                />

            </div>
          </div>
        </section>
        </>
    )
}
export default Hero