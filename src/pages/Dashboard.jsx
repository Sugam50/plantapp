import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../Style/Dash.css";
import SimpleMap from "../components/SimpleMap";
import { ReactMediaRecorder } from "react-media-recorder";

function Dashboard() {
 
  const [center, setCenter] = useState({
    lat: 33.1425314,
    lng: 89.9304523,
  });
  const GetLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCenter({ lat: latitude, lng: longitude });
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  };
  return (
    <div className="Dashboard">
      <div className="profile">
        <div className="aboutME">
          <img src="" alt="" />
          <h1>Name</h1>
        </div>
        <div className="aboutPlant">
          <input placeholder="Enter Plant Name" type="text" />
          <Button variant="dark" type="button" onClick={GetLocation}>
            Get Location
          </Button>
          <p>
            Your location is:latitutde:{center.lat} longitude:{center.lng}
          </p>
          <SimpleMap center={center} />
          <div>
            <ReactMediaRecorder
              video
              render={({
                status,
                startRecording,
                stopRecording,
                mediaBlobUrl,
              }) => (
                <div>
                  <button onClick={startRecording}>Start Recording</button>
                  <button onClick={stopRecording}>Stop Recording</button>
                  <video style={{height:"300px",width:"300px"}} src={mediaBlobUrl} controls autoPlay loop />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
