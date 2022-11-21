import "./App.css";
import { useState, useEffect } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerPosition from "./MarkerPosition";
import "leaflet/dist/leaflet.css";

//https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=192.212.174.101

//

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country?apiKey=at_tpKQZDz5p0yfpXsrs9SY9INCQf4Yk&ipAddress=192.212.174.101`
        );
        const data = await res.json();
        setAddress(data);
        console.log(data);
      };

      getInitialData();
    } catch (error) {
      console.trace(error);
    }
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h4 style={{ color: "white", padding: "30px" }}>IP Address Tracker</h4>
        <div className="in-flex">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            name="ipaddress"
            id="ipaddress"
          />
          <div className="search-box">
            <button className="submit">
              <FaGreaterThan />
            </button>
          </div>
        </div>
      </div>
      {address && (
        <>
          <div className="search-Info">
            <div className="address">
              <h5>Address</h5>
              <h3>{address.ip}</h3>
            </div>
            <div className="location">
              <h5> Location</h5>
              <h3>
                {address.location.city} {address.location.region}
              </h3>
            </div>
            <div className="timezone">
              <h5>Timezone</h5>
              <h3> UTC {address.location.timezone}</h3>
            </div>
            <div className="isp">
              <h5>ISP</h5>
              <h3>{address.isp}</h3>
            </div>
          </div>
          <MapContainer
            style={{
              height: "600px",
              width: "100%",
              position: "absolute",
              zIndex: "-2",
            }}
            center={[address.location.lat, address.location.lng]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerPosition address={address}/>
          </MapContainer>
        </>
      )}
    </div>
  );
}

export default App;
