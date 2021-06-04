import './scss/MapContainer.scss';
import './scss/App_MOBILE.scss';
import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

const MapContainer = () => {
  return (
    <div className='map'>
      <Map center={[50.051, 14.251]} zoom={3} minZoom={3} scrollWheelZoom={true}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
};

export default MapContainer;
