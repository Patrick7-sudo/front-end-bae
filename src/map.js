import React from "react";
import GoogleMapReact from "google-map-react";

const API_KEY = process.env.REACT_APP_API_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({ lat, lng }) {
  console.log(lat);
  const center = {
    lat: lat,
    lng: lng,
  };
  let zoom = 11;
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "50%", margin: "0 auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={lat} lng={lng} text="You are here" />
      </GoogleMapReact>
      <p>
        Your latitude is: {lat} and your longitude is {lng}
      </p>
    </div>
  );
}
