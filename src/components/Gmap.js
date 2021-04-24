import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 41.8781,
  lng: 87.6298,
};

export default function Gmap() {
  const { isLoaded, loadError } = useLoadScript({
    // googleMapsApiKey: ,
    libraries,
  });

  if (loadError) return "Error loading maps!";
  if (!isLoaded) return "Loading maps!";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      ></GoogleMap>
    </div>
  );
}
