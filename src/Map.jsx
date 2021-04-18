import React from 'react';
import './css/Map.css';
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[50.051, 14.251]} zoom={3} minZoom={3} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )
}

export default Map;