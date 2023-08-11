import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import parks from './ParkList.js';

export default function Map() {
  const markericon = L.icon({
    // Location pin icons created by Smashicons - Flaticon
    iconUrl: require("./pin.png"),
    iconSize: [35, 45],
  });

  return (
    <MapContainer center={[47.76232, -122.2054]} zoom={12} style={{ height: '100vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {parks.map((park, index) => (
        <Marker key={index} position={park.coords} icon={markericon}>
          <Popup>{park.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};