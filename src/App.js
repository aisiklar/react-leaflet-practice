import logo from "./logo.svg";
import "./App.css";
import GetCoord from "./GetCoord";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import PanMap from "./PanMap";
//import markerIcon from "leaflet";

function App() {
  console.log("rendered");
  const [coords, setCoords] = useState([]);
  console.log("coords in App.js: ", coords);

  useEffect(() => {
    setCoords(coords);
  }, [coords]);

  const coordHandler = (newCoords) => {
    console.log("newCoords received", newCoords);
    setCoords(newCoords);
  };

  /* const mIcon = markerIcon({
    iconUrl: "./icon/icon-location.svg",
  }); */

  return (
    <div className="App">
      <GetCoord mapCoords={coordHandler}></GetCoord>
      <div>
        {coords.length > 0 ? (
          <MapContainer
            className="leaflet"
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <PanMap changeCoords={coords}></PanMap>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coords} ></Marker>
          </MapContainer>
        ) : null}
      </div>
    </div>
  );
}

export default App;
