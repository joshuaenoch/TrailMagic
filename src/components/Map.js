import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const markers = [
    {name: 'North Creek Trail', coords: [47.79424000606273, -122.20100224333618]},
    {name: 'Shelton View Forest', coords: [47.78423829567166, -122.24205518813842]},
    {name: 'Burke Gilman Trail', coords: [47.750249838223255, -122.21313988465711]},
    {name: 'Bothell Landing Trail', coords: [47.758375235019784, -122.20765723231874]},
    {name: 'Centennial Trail', coords: [47.80890259900624, -122.21770236115123]},
    {name: 'Sammammish River Trail', coords: [47.758487063490136, -122.20486634232856]},
    {name: 'Blyth Park Trail', coords: [47.750620548440125, -122.20895637464787]},
    {name: 'Greenbrier Trailhead', coords: [47.76202022970643, -122.14903418999002]},
    {name: 'Gold Creek County Park', coords: [47.74248995514461, -122.13949380533415]},
  ]

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
      {markers.map((markers, index)=>(
        <Marker key={index} position={markers.coords} icon={markericon}>
          <Popup>{markers.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};