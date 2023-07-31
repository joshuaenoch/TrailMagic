import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const markers = [
    {name: 'Test 1', coords: [47.7632, -122.2054]},
    {name: 'Test 2', coords: [47.7672, -122.2024]},
  ]

  const markericon = L.icon({
    iconUrl: require("./icon.png"),
    iconSize: [35, 45],
  });

  return (
    <MapContainer center={[47.76232, -122.2054]} zoom={15} style={{ height: '100vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((markers, index)=>(
        <Marker key={index} position={markers.coords} icon={markericon}>
          <Popup>{markers.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};