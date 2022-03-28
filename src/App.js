
import './App.css';
import GoogleBody from './googleBody/googlBody';


function App() {
  function checkGeoLocation() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }
  return (
    <div className="App">
      <GoogleBody/>
      {checkGeoLocation()}
    </div>
  );
}

export default App;
