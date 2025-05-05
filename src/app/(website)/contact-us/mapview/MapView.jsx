

'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix Leaflet's default marker icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function SimpleMap() {
  useEffect(() => {
    // To ensure map CSS loads only on client
    import('leaflet/dist/leaflet.css');
  }, []);

  return (
    <MapContainer center={[28.6139, 77.2090]} zoom={13} style={{ height: '500px', width: '100%', zIndex:"-10" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.6139, 77.2090]}>
        <Popup>Yeh Delhi hai!</Popup>
      </Marker>
    </MapContainer>
  );
}




// 2nd Option

// npm install @react-google-maps/api


// 'use client';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// export default function MyMap() {
//   return (
//     <LoadScript googleMapsApiKey="YOUR_API_KEY">
//       <GoogleMap
//         mapContainerStyle={{ height: "500px", width: "100%" }}
//         center={{ lat: 28.6139, lng: 77.2090 }}
//         zoom={13}
//       >
//         <Marker position={{ lat: 28.6139, lng: 77.2090 }} />
//       </GoogleMap>
//     </LoadScript>
//   );
// }





// 3rd Option

// npm install mapbox-gl


// 'use client';
// import { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';

// export default function MapboxMap() {
//   const mapContainer = useRef();

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [77.2090, 28.6139],
//       zoom: 12
//     });

//     new mapboxgl.Marker().setLngLat([77.2090, 28.6139]).addTo(map);

//     return () => map.remove();
//   }, []);

//   return <div ref={mapContainer} style={{ height: '500px', width: '100%' }} />;
// }
