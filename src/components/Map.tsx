"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Search from 'react-leaflet-search';
import L from 'leaflet';

const customIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function Map() {
    const coordinates = [
        { position: [28.6139, 77.2090], name: "New Delhi" },
        { position: [28.5355, 77.3910], name: "Noida" },
        { position: [28.4595, 77.0266], name: "Gurgaon" },
        { position: [28.4089, 77.3178], name: "Faridabad" },
        { position: [28.6692, 77.4538], name: "Ghaziabad" },
    ];

    return (
        <div>
            <MapContainer
                center={[28.4595, 77.0266]}
                zoom={15}
                attributionControl={false}
            >
                <TileLayer
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />

                {coordinates.map((coordinate, index) => (
                    <Marker key={index} position={coordinate.position} icon={customIcon}>
                        <Popup>
                            <h3>{coordinate.name}</h3>
                        </Popup>
                    </Marker>
                ))}

                {/* <Search position="topright" /> */}
            </MapContainer>
        </div>
    );
}

export default Map;
