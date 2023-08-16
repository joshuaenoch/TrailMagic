import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import parks from './ParkList.js';

export default function Map() {
  const markericon = L.icon({
    // Location pin icons created by Smashicons - Flaticon
    iconUrl: require("./pin.png"),
    iconSize: [45, 45],
  });

  const logo = L.icon({
    iconUrl: require("./logo.png"),
    iconSize: [35, 25],
  });


  const UWBothell = [47.7590944830448, -122.1907070032883];

  return (
    <div className = "map-container">
      <div className = "welcome">
        <div>
          <p>Welcome to Trail Magic!</p>
          <p> Use the map to find nearby trails and click on the pins to view their names. If you wish to view a more detailed description of the trails, check out the Trails page. If you wish to find something to eat before or after hiking, we have curated a list of the best nearby food spots in the Food page. If you wish to forage for your own food while hiking, check out the Foraging page.</p>
          <p>Happy hiking!</p>
        </div>
        <MapContainer center={[47.7732, -122.2054]} zoom={13} style={{ height: '100vh' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {parks.map((park, index) => (
            <Marker key={index} position={park.coords} icon={markericon}>
              <Popup>{park.name}</Popup>
            </Marker>
          ))}
          <Marker position={UWBothell} icon = {logo}>
            <Popup>UW Bothell</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};