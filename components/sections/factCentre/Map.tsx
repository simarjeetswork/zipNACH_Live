// components/sections/banks/BanksMap.tsx
'use client';
import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { MapPin } from 'lucide-react';

const INDIA_TOPOJSON = 'https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson';

export default function BanksMap() {
    // data/state-coordinates.ts
    const stateCoordinates: Record<string, [number, number]> = {
        Maharashtra: [75.7139, 19.7515],
        Karnataka: [75.7139, 15.3173],
        'Uttar Pradesh': [80.9462, 26.8467],
        'Tamil Nadu': [78.6569, 11.1271],
        Gujarat: [71.1924, 22.2587],
        Rajasthan: [74.2179, 27.0238],
        'West Bengal': [87.8550, 22.9868],
        'Madhya Pradesh': [78.6569, 22.9734],
        Delhi: [77.1025, 28.7041],
        Punjab: [75.3412, 31.1471],
        // add remaining states matching your banksByState keys
    };
    // data/banks-by-state.ts
    const banksByState: Record<string, string[]> = {
        Maharashtra: ['Bank of Maharashtra', 'IDBI Bank', 'Bank of India'],
        Karnataka: ['Canara Bank', 'Vijaya Bank'],
        'Uttar Pradesh': ['Punjab National Bank', 'Allahabad Bank'],
        // ...fill in your ~100 banks grouped by their state
    };
    const [hoveredState, setHoveredState] = useState<string | null>(null);
    const [clickedState, setClickedState] = useState<string | null>(null);
    const activeState = clickedState ?? hoveredState;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <div className="border rounded-lg overflow-hidden relative">
                <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000, center: [80, 22] }}>
                    <Geographies geography={INDIA_TOPOJSON}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: { fill: '#E5E7EB', outline: 'none', stroke: '#fff', strokeWidth: 0.5 },
                                        hover: { fill: '#E5E7EB', outline: 'none' },
                                        pressed: { fill: '#E5E7EB', outline: 'none' },
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {/* Pins — only for states with bank data */}
                    {Object.entries(stateCoordinates).map(([stateName, coords]) => {
                        if (!banksByState[stateName]) return null;
                        const isActive = activeState === stateName;

                        return (
                            <Marker
                                key={stateName}
                                coordinates={coords}
                                onMouseEnter={() => setHoveredState(stateName)}
                                onMouseLeave={() => setHoveredState(null)}
                                onClick={() => setClickedState((prev) => (prev === stateName ? null : stateName))}
                                style={{ default: { cursor: 'pointer' } }}
                            >
                                <g transform="translate(-12, -24)">
                                    <MapPin
                                        size={24}
                                        fill={isActive ? '#004ADE' : '#3F89FF'}
                                        stroke="#fff"
                                        strokeWidth={1}
                                    />
                                </g>

                                {/* Tooltip — only shown when this specific marker is hovered/active */}
                                {isActive && (
                                    <text
                                        textAnchor="middle"
                                        y={-32}
                                        style={{
                                            fontFamily: 'inherit',
                                            fontSize: '11px',
                                            fontWeight: 600,
                                            fill: '#032656',
                                        }}
                                    >
                                        {stateName}
                                    </text>
                                )}
                            </Marker>
                        );
                    })}
                </ComposableMap>
            </div>

            {/* Side panel — same as before */}
            <div className="bg-off rounded-lg p-6">
                {activeState ? (
                    <>
                        <h3 className="font-heading text-lg text-heading">{activeState}</h3>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600">
                            {banksByState[activeState].map((bank) => (
                                <li key={bank}>{bank}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <p className="text-sm text-gray-400">Hover or tap a pin to see partner banks</p>
                )}
            </div>
        </div>
    );
}