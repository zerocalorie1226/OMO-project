// src/hooks/useCurrentLocation.js
import { useState, useEffect } from "react";

const GOOGLE_MAPS_API_KEY = "AIzaSyBFZH53aP29Zr7vY5jyv7wd4wGQMg3CI1s";

const useCurrentLocation = () => {
  const [location, setLocation] = useState("Loading...");
  const [coordinates, setCoordinates] = useState({ latitude: "", longitude: "" });

  const getCurrentPosition = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      const address = data.results[0].formatted_address; // 현재 위치의 도로명 주소
      setLocation(address);
      return { latitude, longitude, address };
    } catch (error) {
      console.error("현재 위치를 찾는데 실패하였습니다.", error);
      throw new Error("현재 위치를 찾는데 실패하였습니다.");
    }
  };

  useEffect(() => {
    getCurrentPosition()
      .then(({ latitude, longitude }) => {
        // 현재 위치 설정된거 받아옴
        setCoordinates({ latitude, longitude });
      })
      .catch((error) => {
        console.error("현재 위치를 가져오는데 실패했습니다:", error.message);
      });
  }, []);

  return { location, coordinates, setCoordinates, setLocation };
};

export default useCurrentLocation;
