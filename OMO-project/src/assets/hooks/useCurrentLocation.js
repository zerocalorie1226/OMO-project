import { useState, useEffect } from "react";

const KAKAO_REST_API_KEY = "KakaoAK c8c68103031b80f0a572460361537e9f";

const useCurrentLocation = () => {
  const [location, setLocation] = useState("Loading...");
  const [coordinates, setCoordinates] = useState({ latitude: "", longitude: "" });
  const [locationAccessDenied, setLocationAccessDenied] = useState(false);

  const getCurrentPosition = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });

      const response = await fetch(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
        {
          headers: {
            Authorization: KAKAO_REST_API_KEY,
          },
        }
      );
      const data = await response.json();

      let address = "Address not found";
      if (data.documents.length > 0) {
        address = data.documents[0].road_address 
          ? data.documents[0].road_address.address_name 
          : data.documents[0].address.address_name;
      }
      
      setLocation(address);
      return { latitude, longitude, address };
    } catch (error) {
      setLocation("현재 위치를 확인할 수 없습니다.");
      setLocationAccessDenied(true);
    }
  };

  const checkPermission = async () => {
    try {
      const permission = await navigator.permissions.query({ name: 'geolocation' });
      if (permission.state === 'denied') {
        setLocationAccessDenied(true);
        setLocation("현재 위치를 확인할 수 없습니다.");
      }
    } catch (error) {
      console.error("위치 권한 확인 실패:", error.message);
    }
  };

  useEffect(() => {
    checkPermission();
    getCurrentPosition()
      .then(({ latitude, longitude }) => {
        setCoordinates({ latitude, longitude });
      })
      .catch((error) => {
        console.error("현재 위치를 가져오는데 실패했습니다:", error.message);
      });
  }, []);

  return { location, coordinates, setCoordinates, setLocation, locationAccessDenied };
};

export default useCurrentLocation;
