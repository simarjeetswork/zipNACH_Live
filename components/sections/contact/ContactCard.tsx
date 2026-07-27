import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  map?: boolean;
};

export default function ContactCard({
  icon,
  title,
  children,
  map = false,
}: Props) {
  return (
    <div className="rounded-xl border border-[#B3B3B399] bg-white">
      <div className="flex items-start gap-4 p-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3F89FF1A]">
          {icon}
        </div>

        <div className="flex-1">
          <p className="text-[12px] text-[#666666] mb-1">{title}</p>

          <div className="mt-1 text-[12px] font-medium text-[#383838] font-medium font-primary">
            {children}
          </div>
        </div>
      </div>

      {map && (
        <div className="overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1697813180613!2d77.37599007613697!3d28.6246731844364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9f1ab31a7f%3A0x2bcb913e810a5626!2sInfinity%20Business%20Park!5e0!3m2!1sen!2sin!4v1784873338406!5m2!1sen!2sin"
            width="100%"
            height="120"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      )}
    </div>
  );
}
