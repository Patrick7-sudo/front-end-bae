import React from "react";
import GoogleMapReact from "google-map-react";
import { API_KEY } from "./config.js";
console.log(API_KEY);
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ lat, lng }) {
  const center = {
    lat: lat,
    lng: lng,
  };
  let zoom = 11;
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
