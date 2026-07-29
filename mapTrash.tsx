// // // components/sections/clients/ClientsMap.tsx
// // 'use client';
// // import { useEffect, useState } from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import MarkerClusterGroup from 'react-leaflet-cluster';
// // import 'leaflet/dist/leaflet.css';
// // import { Points } from './Points';
// // import L from 'leaflet';

// // export default function ClientsMap() {
// //     const [clientIcon, setClientIcon] = useState<any>(null);
// //     useEffect(() => {
// //         // Only import + create the icon on the client, after mount
// //         import('leaflet').then((i) => {
// //             const icon = i.divIcon({
// //                 className: 'custom-client-marker',
// //                 html: `<div style="
// //           width:12px;
// //           height:12px;
// //         "><svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
// // <path d="M17.6627 8.83138C17.6627 16.6642 8.83134 24.2171 8.83134 24.2171C8.83134 24.2171 0 16.6641 0 8.83138C0 3.95404 3.95399 0 8.83138 0C13.7088 0 17.6627 3.95404 17.6627 8.83138Z" fill="url(#paint0_linear_3623_4351)"/>
// // <path d="M8.83156 14.9619C12.2162 14.9619 14.96 12.2181 14.96 8.83351C14.96 5.44887 12.2162 2.70508 8.83156 2.70508C5.44692 2.70508 2.70312 5.44887 2.70312 8.83351C2.70312 12.2181 5.44692 14.9619 8.83156 14.9619Z" fill="url(#paint1_linear_3623_4351)"/>
// // <path d="M8.83128 12.747C10.9925 12.747 12.7446 10.995 12.7446 8.83372C12.7446 6.67246 10.9925 4.92041 8.83128 4.92041C6.67002 4.92041 4.91797 6.67246 4.91797 8.83372C4.91797 10.995 6.67002 12.747 8.83128 12.747Z" fill="white"/>
// // <defs>
// // <linearGradient id="paint0_linear_3623_4351" x1="8.83135" y1="1.20221" x2="8.83135" y2="22.1017" gradientUnits="userSpaceOnUse">
// // <stop stop-color="#DF6624"/>
// // <stop offset="1" stop-color="#D01A21"/>
// // </linearGradient>
// // <linearGradient id="paint1_linear_3623_4351" x1="8.83157" y1="3.31356" x2="8.83157" y2="13.8913" gradientUnits="userSpaceOnUse">
// // <stop stop-color="#D01A21"/>
// // <stop offset="1" stop-color="#DF6624"/>
// // </linearGradient>
// // </defs>
// // </svg>
// // </div>`,
// //                 iconSize: [12, 12],
// //                 iconAnchor: [6, 6],
// //             });
// //             setClientIcon(icon);
// //         });
// //     }, []);

// //     if (!clientIcon) {
// //         return <div className="h-[600px] flex items-center justify-center">Loading map...</div>;
// //     }

// //     return (
// //         <div className="rounded-lg overflow-hidden border" style={{ height: '600px' }}>
// //             <MapContainer center={[22, 80]} zoom={5} style={{ height: '100%', width: '100%' }} scrollWheelZoom>
// //                 <TileLayer
// //                     url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
// //                     attribution='&copy; OpenStreetMap &copy; CARTO'
// //                 />

// //                 <MarkerClusterGroup chunkedLoading maxClusterRadius={50} spiderfyOnMaxZoom={true}>
// //                     {Points.map((client, i) => (
// //                         <Marker key={i} position={[client.lat, client.lng]} icon={clientIcon}>
// //                             <Popup>
// //                                 <p className="font-semibold text-sm">{client.name}</p>
// //                                 <p className="text-xs text-gray-500">{client.state}</p>
// //                             </Popup>
// //                         </Marker>
// //                     ))}
// //                 </MarkerClusterGroup>
// //             </MapContainer>
// //         </div>
// //     );
// // }


// // components/sections/analytics/NachRejectionChart.tsx
// 'use client';
// import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap/gsap';
// import { useRef, useState } from 'react';
// import { PieChart, Pie, Cell } from 'recharts';

// const values = {
//     NACH: [
//         { name: 'Insufficient Funds', value: 1800, percent: 36, color: '#0036CB' },
//         { name: 'Account Closed', value: 1250, percent: 25, color: '#0036CB' },
//         { name: 'Signature Mismatch', value: 750, percent: 15, color: '#0036CB' },
//         { name: 'Invalid Account Number', value: 500, percent: 10, color: '#0036CB' },
//         { name: 'Others', value: 700, percent: 14, color: '#0036CB' },
//     ],
//     UPI: [
//         { name: 'Customer Declined', value: 2500, percent: 40, color: '#0036CB' },
//         { name: 'Mandate Expired', value: 1200, percent: 20, color: '#0036CB' },
//         { name: 'Insufficient Balance', value: 1000, percent: 16, color: '#0036CB' },
//         { name: 'Bank Timeout', value: 800, percent: 13, color: '#0036CB' },
//         { name: 'Others', value: 700, percent: 11, color: '#0036CB' },
//     ]
// };

// export default function Chart() {
//     const [activeIndex, setActiveIndex] = useState(0); // default to first item, like the screenshot
//     const [tab, setTab] = useState<keyof typeof values>("NACH");
//     const data = values[tab] || [];
//     const active = data[activeIndex];
//     const containerRef = useRef<HTMLDivElement>(null);
//     useGSAP(
//         () => {
//             const bars = gsap.utils.selector(containerRef)('.bar_percent');
//             gsap.fromTo(
//                 bars,
//                 { width: '0%' },
//                 {
//                     width: (i) => `${data[i].percent}%`,
//                     duration: 1,
//                     ease: 'linear',
//                     scrollTrigger: {
//                         trigger: containerRef.current,
//                         start: 'top 85%',
//                         once: true,
//                     },
//                 }
//             );
//         },
//         { scope: containerRef, dependencies: [tab] }
//     );
//     return (
//         <div className="w-full mt-2">

//             <div className='tb_cnt text-center mb-10'>
//                 <div className="br_tbs mx-auto  inline-flex p-1 rounded-3xl bg-white shadow-lg border border-[#B3B3B3] w-[180px] gap-0">
//                     <button className={`py-2 px-4 rounded-3xl w-[50%] text-center text-sm cursor-pointer font-bold ${tab === "NACH"
//                         ? "bg-[#3F89FF33] text-[#004ADE] border border-[#3F89FF]"
//                         : "bg-transparent text-[#05132B]"
//                         }`} onClick={() => setTab("NACH")}>NACH</button>
//                     <button className={`py-2 px-4 rounded-3xl w-[50%] text-center text-sm cursor-pointer font-bold ${tab === "UPI"
//                         ? "bg-[#3F89FF33] text-[#004ADE] border border-[#3F89FF]"
//                         : "bg-transparent text-[#05132B]"
//                         }`} onClick={() => setTab("UPI")}>UPI</button>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-0 lg:gap-8 bg-white rounded-xl border border-[#b3b3b3b9] overflow-hidden" ref={containerRef}>
//                 {/* Left — Donut chart */}
//                 <div className="relative flex items-center justify-center  bg-[url('/images/factCentre/chartBg.png')] bg-cover bg-center py-5 lg:py-20 px-6">
//                     <PieChart width={350} height={350}>
//                         <Pie
//                             data={data}
//                             dataKey="value"
//                             nameKey="name"
//                             innerRadius={130}
//                             outerRadius={170}
//                             startAngle={90}
//                             endAngle={-270}
//                             paddingAngle={2}
//                             style={{ outline: 'none' }}
//                         >
//                             {data.map((entry, index) => (
//                                 <Cell
//                                     key={entry.name}
//                                     fill={entry.color}
//                                     stroke="none"

//                                     opacity={activeIndex === index ? 1 : activeIndex === null ? 1 : 0.5}
//                                     onMouseEnter={() => setActiveIndex(index)}
//                                     style={{ cursor: 'pointer', transition: 'opacity 0.2s ease', outline: 'none' }}
//                                 />
//                             ))}
//                         </Pie>
//                     </PieChart>

//                     {/* Center label — updates based on active segment */}
//                     <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col items-center justify-center pointer-events-none">
//                         <p className="text-6xl font-bold font-mono text-transparent bg-clip-text bg-[linear-gradient(180.24deg,#3333FF_0.21%,#1D1D77_79.1%)]">
//                             {active.percent}
//                             <span className="text-2xl ms-1">%</span>
//                         </p>
//                         <p className="text-base font-semibold text-center text-[#383838] mt-1 ">{active.name}</p>
//                         <p className="text-xm text-[#666666] mt-0.5">{active.value.toLocaleString()} CASES</p>
//                     </div>
//                 </div>

//                 {/* Right — list with bars */}
//                 <div className='bg-white py-10 lg:py-15 px-5 lg:px-10'>
//                     <h2 className=" text-xl lg:text-2xl font-medium font-primary text-[#05132B]">{tab == "NACH" ? "NACH Rejection Distribution" : "UPI Failure Distribution"}</h2>
//                     <p className="text-xs text-[#67758F] mt-1">{tab == "NACH" ? "5,000 failed debits analysed in the last 30 days" : "6,200 failed collect requests analysed in the last 30 days"}</p>

//                     <div className="mt-6 space-y-8">
//                         {data.map((item, index) => {
//                             const isActive = activeIndex === index;
//                             return (
//                                 <div
//                                     key={item.name}
//                                     onMouseEnter={() => setActiveIndex(index)}
//                                     className="cursor-pointer"
//                                 >
//                                     <div className="flex items-center justify-between text-sm mb-1">
//                                         <div className="flex items-center gap-2">
//                                             <span
//                                                 className="w-2 h-2 rounded-full shrink-0"
//                                                 style={{ backgroundColor: "#490E7F" }}
//                                             />
//                                             <span className={isActive ? 'text-[#404040] font-medium font-primary text-sm' : 'text-gray-500 font-medium font-primary text-sm'}>
//                                                 {item.name}
//                                             </span>
//                                         </div>
//                                         <div className="flex items-center gap-10 text-xs text-[#404040] font-primary ">
//                                             <span>{item.value}</span>
//                                             <span className="w-8 text-right">{item.percent}%</span>
//                                         </div>
//                                     </div>
//                                     <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
//                                         <div
//                                             className="h-full rounded-full  bar_percent"
//                                             style={{
//                                                 width: `0%`,
//                                                 backgroundColor: "#9035FF",
//                                                 opacity: isActive ? 1 : 0.6,
//                                             }}
//                                         />
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }