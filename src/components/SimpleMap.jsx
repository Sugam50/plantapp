import React from 'react';
import GoogleMapReact from "google-map-react";
import { MapPin } from 'react-feather';

function SimpleMap({center}) {
    const AnyReactComponent = () => <div><MapPin/></div>;
    return (
        <div style={{ height: "400px", width: "400px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAGq0QP9ncJK1I94kWs1H8yo7thj0V5PA8",
            }}
            defaultCenter={center}
            defaultZoom={11}
          >
            <AnyReactComponent
              lat={center.lat}
              lng={center.lng}
            //   text="My Marker"
            />
          </GoogleMapReact>
        </div>
    )
}

export default SimpleMap
