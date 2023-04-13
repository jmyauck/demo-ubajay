import React, { useRef, useEffect } from 'react';
import L from 'leaflet'
import './Map.css';

export function Map(props) {
  const mapRef = useRef(null);

  useEffect(() => {
    // Crea el mapa de Leaflet
    const map = L.map(mapRef.current).setView([props.latitude, props.longitude], 12);

    // Agrega una capa de mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(map);

    // Agrega un marcador en la ubicación especificada
    L.marker([props.latitude, props.longitude]).addTo(map);
  }, [props.latitude, props.longitude]);

  return (
    <div className="map-container">
      <div id="map" ref={mapRef} className="map"/>
    </div>
  );
}

export default Map;