import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {

    const mapStyles = {
        height: "50%",
        width: "100%",
    };

    const defaultCenter = {
        lat: 40.2086334, 
        lng: 44.5290867  
    };



  return (
    <LoadScript googleMapsApiKey="AIzaSyCmAwYPuq3gDFTlfzbttMiBaGavrmUtF8g">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
            >
                {/* Marker for Yerevan, Paruyr Sevak 9 */}
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
  )
}
