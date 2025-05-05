"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

export default function MapView() {
    useEffect(() => {
        // Leaflet icon fix
        const L = require("leaflet");
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });
    }, []);

    return (
        <MapContainer center={[28.6139, 77.2090]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[28.6139, 77.2090]}>
                <Popup>Delhi, India</Popup>
            </Marker>
        </MapContainer>
    );
}
