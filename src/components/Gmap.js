import React from "react";
import { Gmaps, Marker } from "react-gmaps";

const coords = {
  lat: 2.9286648,
  lng: 101.7589229
};

function mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator.platform.indexOf("iPhone") !== -1) || 
       (navigator.platform.indexOf("iPad") !== -1) || 
       (navigator.platform.indexOf("iPod") !== -1))
      window.open("maps://maps.google.com/maps?daddr="+coords.lat+","+coords.lng+"&amp;ll=");
      else /* else use Google */
      window.open("https://maps.google.com/maps?daddr="+coords.lat+","+coords.lng+"&amp;ll=");
  }

const params = { v: "3.exp", key: "AIzaSyBC2_95XCCaf5AOTc_C1DKe3D0yVXmg3Jc" };

export default class Gmap extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onClick(e) {
    console.log("onClick", e);
    mapsSelector()
  }

  

  render() {
    return (
      <Gmaps
        width={"100%"}
        height={"300px"}
        lat={coords.lat}
        lng={coords.lng}
        zoom={17}
        loadingMessage={"Be happy"}
        params={params}
        onMapCreated={this.onMapCreated}
      >
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          onClick={this.onClick}
        />
      </Gmaps>
    );
  }
}
