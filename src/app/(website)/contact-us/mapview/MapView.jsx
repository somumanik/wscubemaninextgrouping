"use client";

import { useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    }
  }, []);

  // return (
  //   <MapContainer
  //     center={[28.6139, 77.2090]} // Delhi
  //     zoom={13}
  //     className="h-full w-full"
  //     style={{ height: "100%", width: "100%" }}
  //   >
  //     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  //     <Marker position={[28.6139, 77.2090]}>
  //       <Popup>Delhi, India</Popup>
  //     </Marker>
  //   </MapContainer>
  // );

}

