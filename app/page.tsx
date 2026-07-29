import BottomBanner from "@/components/sections/home/BottomBanner";
import Hero from "@/components/sections/home/Hero";
import MandateCoverage from "@/components/sections/home/MandateCoverage";
import Operations from "@/components/sections/home/Operations";
import SecurityAndReliability from "@/components/sections/home/SecurityAndReliability";
import StatsSection from "@/components/sections/home/StatsSection.tsx";
import TrustedCompanies from "@/components/sections/home/TrustedCompanies";


export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <TrustedCompanies />
        <Operations />
        <StatsSection />
        <SecurityAndReliability />
        <MandateCoverage />
        <BottomBanner />
      </div>
    </>
  );
}
