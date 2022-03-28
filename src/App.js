import './App.css';

function App() {

function checkGeoLocation() {
  navigator.geolocation.getCurrentPosition((function(position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  }))
}
  return (
    <div className="App">
      {checkGeoLocation()}
    </div>
  );
}

export default App;
