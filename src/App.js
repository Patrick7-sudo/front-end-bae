import { useState } from "react";
import "./App.css";
import GoogleBody from "./googleBody/googlBody";
import SimpleMap from "./map";
import Navbar from "./googleNavbar/googleNavbar"

function App() {
  const [showResult, setShowResult] = useState(false);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  function checkGeoLocation() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        console.log("Latitude is :", position.coords.latitude);
        setLat(position.coords.longitude);
        setLng(position.coords.longitude);
        console.log("Longitude is :", position.coords.longitude);
        setShowResult("Map");
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
        setShowResult("Message");
      }
    );
  }
  return (
    <div className="App">
      <Navbar/>
      <GoogleBody />
      {checkGeoLocation()}
      {showResult === "Map" ? (
        <SimpleMap lng={lng} lat={lat} />
      ) : showResult === "Message" ? (
        <p>You were safe!</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
