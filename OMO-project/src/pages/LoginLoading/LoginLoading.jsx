import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; //  JWT를 디코딩하여 토큰 만료 시간을 확인하는 라이브러리
import {Loading} from "../../components/Loading/Loading";

const isTokenExpired = (token) => {
  // accessToken의 만료 시간을 확인하는 함수
  if (!token) return true;

  let decodedToken;
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    console.error("Failed to decode token:", error);
    return true;
  }

  const currentTime = Date.now() / 1000; // 현재 시간을 초 단위로 변환

  return decodedToken.exp < currentTime; // 토큰의 만료 시간이 현재 시간보다 이전이면 만료된 것
};

const LoginLoading = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewToken = async (refreshToken) => {
      try {
        const response = await axios.post("https://api.oneulmohae.co.kr/auth/refresh", {token: refreshToken});
        return response.data.accessToken;
      } catch (error) {
        console.error("Failed to refresh access token:", error);
        return null;
      }
    };

    const handleLogin = async () => {
      const params = new URLSearchParams(window.location.search);

      const accessToken = params.get("accessToken");
      const refreshToken = params.get("refreshToken");
      const isExistingMember = params.get("isExistingMember");
      const memberId = params.get("memberId");

      // 만약 액세스 토큰이 만료된 경우 새 토큰 요청 (refreshToken 사용)
      let validAccessToken = accessToken;
      if (isTokenExpired(accessToken)) {
        validAccessToken = await fetchNewToken(refreshToken);
      }

      if (validAccessToken) {
        // 로컬 스토리지에 토큰과 멤버 정보를 저장
        localStorage.setItem("accessToken", validAccessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("isExistingMember", isExistingMember);
        localStorage.setItem("memberId", memberId);

        // 사용자 상태에 따라 다른 페이지로 리디렉션
        if (isExistingMember === "true") {
          console.log("기존 멤버로 확인됨, 홈으로 이동");
          navigate("/"); // 기존 멤버일 경우 홈 페이지로 이동
          setIsLoggedIn(true);
        } else {
          console.log("새로운 멤버로 확인됨, Signup 페이지로 이동");
          navigate("/Signup"); // 새 멤버일 경우 회원가입 페이지로 이동
          setIsLoggedIn(true);
        }
      } else {
        console.error("Failed to obtain a valid access token");
        // 토큰 갱신 실패 시 처리
        navigate("/Login");
        setIsLoggedIn(false);
      }

      setLoading(false);
    };

    handleLogin();
  }, [navigate]);

  if (loading) {
    return <Loading />;
  }

  return null;
};

export default LoginLoading;
