import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading"; // 경로는 실제 Loading 컴포넌트 위치에 맞게 조정해야 합니다.

const LoginLoading = () => {
  const navigate = useNavigate();
  const [loginApi, setLoginApi] = useState(localStorage.getItem('loginService') || "");

  // 이미 가입한 유저일 경우 메인 페이지로 이동
  const handleHome = () => {
    navigate("/");
  };

  // 처음 가입한 유저일 경우 닉네임 설정 페이지로 이동
  const handleSignup = () => {
    navigate("/Signup");
  };

  // 로그인 처리 API 호출
  const handleLoginGet = async () => {
    if (!loginApi) {
      console.log("로그인 서비스 타입이 제공되지 않았습니다. 로그인 페이지로 이동합니다.");
      navigate("/login"); // 로그인 페이지로 리다이렉트
      return;
    }
    console.log(loginApi)
    try {
      const url = `https://api.oneulmohae.co.kr/oauth2/authorization/${loginApi}`;
      const res = await axios.get(url);

      if (res.status === 200) {
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        res.data.isExistingMember ? handleHome() : handleSignup();
      } else {
        console.error(`로그인 실패: 서버 오류 ${res.status}`);
        alert("로그인 처리 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("로그인 GET 요청 에러:", error);
      alert("로그인 처리 중 예기치 못한 문제가 발생했습니다.");
      navigate("/login");  // 로그인 페이지로 리다이렉트
    }
  };

  // 컴포넌트 마운트 시 로그인 API 호출
  useEffect(() => {
    handleLoginGet();
  }, [loginApi, navigate]);

  return <Loading />; // 로딩 컴포넌트 표시
};

export default LoginLoading;
