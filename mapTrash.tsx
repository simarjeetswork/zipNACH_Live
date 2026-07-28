// // components/sections/clients/ClientsMap.tsx
// 'use client';
// import { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import MarkerClusterGroup from 'react-leaflet-cluster';
// import 'leaflet/dist/leaflet.css';
// import { Points } from './Points';
// import L from 'leaflet';

// export default function ClientsMap() {
//     const [clientIcon, setClientIcon] = useState<any>(null);
//     useEffect(() => {
//         // Only import + create the icon on the client, after mount
//         import('leaflet').then((i) => {
//             const icon = i.divIcon({
//                 className: 'custom-client-marker',
//                 html: `<div style="
//           width:12px;
//           height:12px;
//         "><svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M17.6627 8.83138C17.6627 16.6642 8.83134 24.2171 8.83134 24.2171C8.83134 24.2171 0 16.6641 0 8.83138C0 3.95404 3.95399 0 8.83138 0C13.7088 0 17.6627 3.95404 17.6627 8.83138Z" fill="url(#paint0_linear_3623_4351)"/>
// <path d="M8.83156 14.9619C12.2162 14.9619 14.96 12.2181 14.96 8.83351C14.96 5.44887 12.2162 2.70508 8.83156 2.70508C5.44692 2.70508 2.70312 5.44887 2.70312 8.83351C2.70312 12.2181 5.44692 14.9619 8.83156 14.9619Z" fill="url(#paint1_linear_3623_4351)"/>
// <path d="M8.83128 12.747C10.9925 12.747 12.7446 10.995 12.7446 8.83372C12.7446 6.67246 10.9925 4.92041 8.83128 4.92041C6.67002 4.92041 4.91797 6.67246 4.91797 8.83372C4.91797 10.995 6.67002 12.747 8.83128 12.747Z" fill="white"/>
// <defs>
// <linearGradient id="paint0_linear_3623_4351" x1="8.83135" y1="1.20221" x2="8.83135" y2="22.1017" gradientUnits="userSpaceOnUse">
// <stop stop-color="#DF6624"/>
// <stop offset="1" stop-color="#D01A21"/>
// </linearGradient>
// <linearGradient id="paint1_linear_3623_4351" x1="8.83157" y1="3.31356" x2="8.83157" y2="13.8913" gradientUnits="userSpaceOnUse">
// <stop stop-color="#D01A21"/>
// <stop offset="1" stop-color="#DF6624"/>
// </linearGradient>
// </defs>
// </svg>
// </div>`,
//                 iconSize: [12, 12],
//                 iconAnchor: [6, 6],
//             });
//             setClientIcon(icon);
//         });
//     }, []);

//     if (!clientIcon) {
//         return <div className="h-[600px] flex items-center justify-center">Loading map...</div>;
//     }

//     return (
//         <div className="rounded-lg overflow-hidden border" style={{ height: '600px' }}>
//             <MapContainer center={[22, 80]} zoom={5} style={{ height: '100%', width: '100%' }} scrollWheelZoom>
//                 <TileLayer
//                     url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//                     attribution='&copy; OpenStreetMap &copy; CARTO'
//                 />

//                 <MarkerClusterGroup chunkedLoading maxClusterRadius={50} spiderfyOnMaxZoom={true}>
//                     {Points.map((client, i) => (
//                         <Marker key={i} position={[client.lat, client.lng]} icon={clientIcon}>
//                             <Popup>
//                                 <p className="font-semibold text-sm">{client.name}</p>
//                                 <p className="text-xs text-gray-500">{client.state}</p>
//                             </Popup>
//                         </Marker>
//                     ))}
//                 </MarkerClusterGroup>
//             </MapContainer>
//         </div>
//     );
// }