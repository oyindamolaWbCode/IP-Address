
import "./App.css";
import { FaGreaterThan } from "react-icons/fa";
//import { useState } from "react";

//https://geo.ipify.org/api/v2/country,city?apiKey=at_tpKQZDz5p0yfpXsrs9SY9INCQf4Yk&ipAddress=8.8.8.8

function App() {

  return (
    <div className="App">
      <div className="header">
         <h4 style={{color: "white", padding: "30px"}}>IP Address Tracker</h4>
         <div className="in-flex">
          <input type="text" placeholder="Search for any IP address or domain" />
          <div className="search-box">
            <div className="search-container">
            < FaGreaterThan />
            </div>
            </div>
         </div>
      </div>
      <div className="search-Info">
        <div className="address">
          <h5>Address</h5>
          <h3>192.212.174.101</h3>
        </div>
        <div className="location">
          <h5> Location</h5>
          <h3>Brooklyn, NY</h3>
        </div>
        <div className="timezone">
          <h5>Timezone</h5>
          <h3> UTC -05:00</h3>
        </div>
        <div className="isp">
          <h5>ISP</h5>
          <h3>SpaceX / Starlink</h3>
        </div>
      </div>
      <div id="map"></div>
    </div>
  );
}

export default App;
