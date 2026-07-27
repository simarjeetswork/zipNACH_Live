"use client"
import Heading from "@/components/ui/Heading";
import AnimatedText from "@/lib/gsap/animations/AnimateText";
import { ArrowRight } from "lucide-react";
import { aggregator, corporates, bank } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { useGSAP, gsap, ScrollTrigger } from "@/lib/gsap/gsap";
import { useRef } from "react";
export default function Platform() {
    const plans = [
        {
            icon: corporates,
            title: 'Corporate',
            description:
                'Flexible deployment and commercial models for institutions running recurring collections at scale.',
            suitableFor:
                'Suitable for: NBFCs, Mutual Funds, Insurance Companies, Stock Brokers, Lending Platforms, Enterprises and other institutions managing recurring collections.',
            href: '/plans/corporate',
        },
        {
            icon: bank,
            title: 'Banks',
            description:
                'Empower corporates with a secure and scalable mandate management platform.',
            suitableFor:
                'Suitable for: Banks looking to provide mandate management and collection services to their corporate customers.',
            href: '/plans/banks',
        },
        {
            icon: aggregator,
            title: 'Aggregator',
            description:
                'Configurable deployment models to support diverse business and ecosystem requirements.',
            suitableFor:
                'Suitable for: Payment service providers, collection platforms, fintech ecosystems and institutions managing mandates across multiple merchants or businesses.',
            href: '/plans/aggregator',
        },
    ];
    const container = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const box = gsap.utils.selector(container);
            ScrollTrigger.batch(box(".mdl_bx"), {
                start: "top 80%",
                once: true,
                onEnter: (elements) => {
                    gsap.fromTo(elements, {
                        y: 100,
                        opacity: 0,
                    },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power3.out",
                        });
                },
            });

        }, { scope: container, dependencies: [] }
    );
    return (
        <>
            <section className="mod_plfr_x py-20 px-6 relative overflow-hidden bg-off" ref={container}>
                <div className="container mx-auto ">
                    <div className="relative z-1">
                        <AnimatedText as="p" className="text-blue text-start text-sm uppercase font-mono font-normal bg-chip inline-block px-4 rounded-2xl py-1 mb-5">Deployment Models</AnimatedText>
                        <Heading as="h2" className=" text-5xl leading-[110%] text-start font-light font-primary text-heading mb-10">One platform. <br />
                            <span className="text-primary font-medium">Three operating models.</span></Heading>
                        <div className="grid grid-cols-3 gap-5">
                            {plans.map((plan, index) => (
                                <div key={index} className="bg-shade rounded-[4px] p-10 flex flex-col h-full justify-between mdl_bx opacity-0">
                                    <div className="w-full flex-1">
                                        <div className="w-[50px] h-[50px] relative mb-7">
                                            <Image width={100} height={100} className="object-contain" src={plan.icon} alt={plan.title} />
                                        </div>

                                        <h3 className="text-2xl font-medium leading-[120%] text-start text-sub font-primary mb-3">{plan.title}</h3>
                                        <p className="text-sm font-normal leading-[180%] text-para mb-4">{plan.description}</p>
                                        <p className="text-xs italic font-normal leading-[180%] text-para mb-7">{plan.suitableFor}</p>
                                    </div>              <div>
                                        <Link href="/" className="text-xs font-normal font-mono leading-[120%] text-primary text-center p-3 bg-white rounded-sm inline-flex flex-row w-auto gap-2">View Plan <span><ArrowRight size={16} /></span></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}