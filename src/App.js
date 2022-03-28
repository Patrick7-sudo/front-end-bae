import "./App.css";
import GoogleBody from "./googleBody/googlBody";
import SimpleMap from "./map";
import Navbar from "./googleNavbar/googleNavbar"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <GoogleBody />
    </div>
  );
}

export default App;
