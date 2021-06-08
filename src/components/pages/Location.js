import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function Location() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBAEjXt8nJ5kKq9R48Ta1ecTXFklJSvIEE",
  });
  if (!isLoaded) alert("Error while loading map");

  const mapContainerStyle = {
    width: "100vw",
    height: "94vh",
  };
  const center = {
    lat: 11.0168,
    lng: 76.9558,
  };
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
