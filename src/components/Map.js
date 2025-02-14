"use client";
import { useState, useEffect } from "react";
import loader from "../utils/googleMapsLoader";

const Map = ({ address }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    console.log("Попытка загрузки Google Maps API...");

    loader.load().then(() => {
      console.log("Google Maps API загружен!");
      
      const mapElement = document.getElementById("map");
      if (!mapElement) {
        console.error("Элемент #map не найден!");
        return;
      }

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        console.log("Геокодирование:", results, status);

        if (status === "OK") {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 14,
          };

          console.log("Создание карты...");
          const newMap = new window.google.maps.Map(mapElement, mapOptions);

          new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: newMap,
          });

          setMap(newMap);
        } else {
          console.error("Ошибка геокодирования:", status);
        }
      });
    }).catch((error) => {
      console.error("Ошибка загрузки Google Maps API:", error);
    });

  }, [address]);

  return <div id="map" style={{ height: "700px", width: "100%" }}></div>;
};

export default Map;
