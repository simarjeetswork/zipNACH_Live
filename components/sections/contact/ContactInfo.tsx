import Image from "next/image";
import ContactCard from "./ContactCard";
import { MapPin } from "lucide-react";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import Heading from "@/components/ui/Heading";

export default function ContactInfo() {
  return (
    <div className="rounded-tl-xl rounded-bl-xl border-t border-l border-b  border-[#E5E7EB] bg-white p-4 md:p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.06)] max-h-[640px]">
     <Heading className="text-[28px] font-semibold text-[#05132B] font-primary ml-[-8px]" as="h2" > Talk to us</Heading>
      <AnimatedText as="p" delay={0.2} className="text-[var(--color-para)] md:mb-10 mb-4">Reach out directly — our solutions team is ready to help.</AnimatedText>

      <div className="space-y-4">
         <ContactCard
          title="Call us"
          icon={
            <Image
              src="/images/phone-icon.svg"
              alt=""
              width={20}
              height={20}
            />
          }
        >
          (+91)-120-4237934, (+91)-8448120153
        </ContactCard>

        <ContactCard
          title="Mail us"
          icon={
            <Image
              src="/images/email-icon.svg"
              alt=""
              width={20}
              height={20}
            />
          }
        >
          sales@yoekisoft.com
        </ContactCard>

        <ContactCard
          title="Visit us"
          map
          icon={
            <MapPin size={22} color="#3F89FF" />
          }
        >
          H-221, Suite-102, Infinity Business Park,
          <br />
          Sector-63, Noida-201301
        </ContactCard>
      </div>
    </div>
  );
}