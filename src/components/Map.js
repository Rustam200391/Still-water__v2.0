"use client";
import { useState, useEffect } from "react";
import loader from "../utils/googleMapsLoader";

const Map = ({ address }) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK") {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 14,
          };
          const newMap = new window.google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: newMap,
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);
  return <div id="map" style={{ height: "700px" }}></div>;
};

export default Map;

// сервер пытается установить "cookie", но у него не установлен атрибут SameSite, о котором сообщается в более новых версиях браузеров.
// установите строку заголовка на странице вашего сервера (если на PHP). как показано ниже:header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
// (помните: это должно решаться на стороне сервера.)
