"use client";

const nodes = [
    {
        label: "Digital Workflow",
        x: 50,
        y: 14,
        lineX: 50,
        lineY: 18,
        delay: "0s",
        opacity: 1,
    },
    {
        label: "Single \n Integration",
        x: 90.8465,
        y: 38.8754,
        lineX: 86.9444,
        lineY: 40.1114,
        // delay: "0.3s",
        opacity: 1,
    },
    {
        label: "Automated \n Collections",
        x: 75.8626,
        y: 79.1246,
        lineX: 74.687,
        lineY: 75.8885,
        // delay: "0.6s",
        opacity: 1,
    },
    {
        label: "Paperless \n Registration",
        x: 24.1374,
        y: 79.1246,
        lineX: 25.313,
        lineY: 75.8885,
        // delay: "0.9s",
        opacity: 1,
    },
    {
        label: "Higher \n Success Rate",
        x: 9.1535,
        y: 38.8754,
        lineX: 15.0556,
        lineY: 40.1114,
        // delay: "1.2s",
        opacity: 1,
    },
];

export default function NetworkDiagram() {
    return (
        <div className="pointer-events-none absolute inset-0">
            <svg
                className="absolute inset-0 h-full w-full z-20"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {nodes.map((node) => (
                    <g key={node.label}>
                        <line
                            x1={node.lineX}
                            y1={node.lineY}
                            x2={50}
                            y2={50}
                            stroke="#3F89FF99"
                            strokeWidth={0.15}
                            strokeDasharray="0.6 0.6"
                        />

                        <circle
                            r={0.3}
                            fill="#3F89FF"
                            opacity="0.5"                        >
                            <animateMotion
                                dur="2s"
                                repeatCount="indefinite"
                                begin={node.delay}
                                path={`M ${node.lineX} ${node.lineY} L 50 50`}
                            />
                        </circle>
                    </g>
                ))}
            </svg>

            {nodes.map((node) => (
                <div
                    key={node.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-[100] w-max"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                    }}
                >
                    <div className="rounded-sm  bg-[#3F89FF1A] text-center lg:whitespace-normal whitespace-pre-line px-3 py-1 text-xs sm:text-sm text-[#3F89FF] font-mono shadow-sm backdrop-blur">
                        {node.label}
                    </div>
                </div>
            ))}
        </div>
    );
}