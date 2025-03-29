import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    initMap: () => void;
  }
}

const GoogleMapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingScript = document.getElementById("googleMaps");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyD4cbUI4MTskQoxdkSkgy1_bApPYn288vQ&callback=initMap";
      script.async = true;
      script.defer = true;
      script.id = "googleMaps";
      document.body.appendChild(script);
    } else {
      window.initMap();
    }

    window.initMap = () => {
      if (mapRef.current) {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: 35.685, lng: 127.814 },
          zoom: 7,
        });
      }
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px", marginTop: "20px" }} />;
};

export default GoogleMapComponent;
