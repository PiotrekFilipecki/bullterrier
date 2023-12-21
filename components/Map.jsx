'use client';

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
export function ChangeView({ coords }) {
  const map = useMap()
  map.setView(coords, 20)
  return null
}

const icon = new L.Icon({
  iconUrl: './images/bylldog.svg',
  iconRetinaUrl: './images/bylldog.svg',
  iconSize: [40, 40],
  //shadowSize: [50, 64],
  iconAnchor: [20, 2],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
})

export default function Map() {
  const [geoData, setGeoData] = useState({
    lat: 50.05156422395659,
    lng: 19.941790915345283,
  })

  const center = [geoData.lat, geoData.lng]

  const [mapBackground, setMapBackground] = useState('#ffffff') // Default background color is white

  // Function to handle changing the background color
  const handleChangeBackground = () => {
    setMapBackground('#ff0000') // Change the background color to red
  }

  return (
    <MapContainer
      center={center}
      zoom={35}
      style={{ height: '50vh', backgroundColor: mapBackground }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} icon={icon} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  )
}