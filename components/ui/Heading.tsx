"use client";

import { Children, cloneElement, isValidElement, JSX, ReactNode, useRef, ElementType } from "react";
import { useGSAP, gsap } from "@/lib/gsap/gsap";
type AnimatedHeadingProps = {
    children: ReactNode;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
};


function splitText(node: ReactNode): ReactNode {
    // Text node
    if (typeof node === "string") {
        return node.split(" ").map((word, i, arr) => (
            <span
                key={i}
                className="word inline-block overflow-hidden"
            >
                <span className="inline-block">
                    {word}
                </span>
                {i !== arr.length - 1 && "\u00A0"}
            </span>
        ));
    }

    // React Element (<span>, <strong>, etc.)
    if (isValidElement<{ children?: ReactNode }>(node)) {
        return cloneElement(node, {
            children: Children.map(node.props.children, splitText),
        });
    }

    return node;
}

const Heading = ({
    children,
    className = "",
    as = "h2",
}: AnimatedHeadingProps) => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    // Animate the heading
    useGSAP(
        () => {
            const elements = gsap.utils.selector(headingRef.current);

            gsap.from(
                elements(".word > span"),
                {
                    yPercent: 100,
                    stagger: 0.05,
                    delay: 0.1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        once: true,
                    }
                }
            );
        },
        { scope: headingRef, dependencies: [] }
    );

    const Tag = as as ElementType;

    return (
        <Tag ref={headingRef as any} className={className}>
            {Children.map(children, splitText)}
        </Tag>
    );
}

export default Heading