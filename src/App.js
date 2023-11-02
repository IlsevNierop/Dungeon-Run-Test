import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [speed, setSpeed] = useState(0);

  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(function(position) {
      const {latitude, longitude, speed} = position.coords;
      setLongitude(longitude);
      setLatitude(latitude);
      setSpeed(speed);
      console.log(longitude)
      console.log(latitude)
      console.log(speed)
    }, function (error) {
      console.error("Something is wrong: " + error)
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }
  else {
    console.log("Geolocation is not supported with this browser.")
  }


  return (
      <div className="App">
        <header className="App-header">
          <h1>Test gps</h1>
          <p>Longitude {longitude}</p>
          <p>Latitude {latitude}</p>
          <p>Speed {speed}</p>
        </header>

        {/*<div id="map"></div>*/}


      </div>
  );
}

export default App;
