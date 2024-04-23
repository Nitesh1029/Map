"use client"
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const MapSearch = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      const searchControl = L.control.locate({
        position: 'topleft',
        strings: {
          title: 'Search Location',
        },
        locateOptions: {
          maxZoom: 16,
        },
        flyTo: true,
      }).addTo(map.leafletElement);
    }
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} ref={mapRef}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default MapSearch;