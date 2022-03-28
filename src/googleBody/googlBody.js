import style from "./googleBody.module.css";
import { useState, useEffect } from "react";
import image from "./google.png";
import microphoneImg from "./googlemicrophone.png";
import SimpleMap from "../map";

function GoogleBody() {
  const [showResult, setShowResult] = useState(false);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [height, setHeight] = useState(window.innerHeight);
  const [inputField, setInputField] = useState("hello world");

// function GoogleBody(){
//     const [height, setHeight] = useState(window.innerHeight);
//     const [inputField, setInputField] = useState('')
//     useEffect(()=>{
//         function height(){
//             setHeight(window.innerHeight);
//         }

  function checkGeoLocation() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(showResult);
        setLng(position.coords.longitude);
        setLat(position.coords.latitude);
        setShowResult("Map");
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
        setShowResult("Message");
      }
    );
  }

  useEffect(() => {
    function height() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", height);


    height();
  }, [height]);
  return (
    <>
      <div className={style.bodyMainContainer} style={{ height: height * 0.6 }}>
        <div className={style.bodyMainWrapper}>
          {/* google image */}
          <img
            src={image}
            alt="google mircophone"
            className={style.imgGoogle}
          ></img>

          {/* search box section */}
          <div className={style.inputBoxWrapper}>
            <div className={style.inputbox}>
              <i class="fa fa-search" style={{ color: "#9aa0a6" }}></i>
              <input
                type="text"
                className={style.inputBoxInput}
                onChange={(e) => {
                  return setInputField(e.target.value);
                }}
                value={inputField}
              />
              <div className={style.microphoneimageContainer}>
                <img
                  className={style.microphoneimage}
                  src={microphoneImg}
                  alt="google mircophone"
                />
              </div>
              <div></div>
            </div>
          </div>
          {/* button */}
          <div className={style.buttonContainer}>
            <button onClick={() => checkGeoLocation()}>Google Search</button>
            <button>I'm Feeling Lucky</button>
          </div>
          {showResult === "Map" ? <SimpleMap lng={lng} lat={lat} /> : <></>}
          {showResult === "Message" ? (
            <p style={{ fontSize: "3em" }}>
              Well done, your security settings have prevented us from seeing
              your location
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default GoogleBody;
