import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import FooterWrapper from "@/components/layout/FooterWrapper";
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "zipNACH",
  description:
    "Operational intelligence infrastructure for NACH mandate validation, digitization and automation — built for banks, NBFCs and fintechs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${openSans.variable}`}
    >
      <body>
        {/* <SmoothScrollProvider> */}
          <Header />
          <div className="">
            {children}
          </div>
          <FooterWrapper />
        {/* </SmoothScrollProvider> */}
      </body>
    </html>
  );
}
