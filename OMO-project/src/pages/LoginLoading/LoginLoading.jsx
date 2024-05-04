import axios from 'axios'; // axios 라이브러리 임포트
import { useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom"; 

const LoginLoading = () => {
  const navigate = useNavigate();

  // 이미 가입한 유저일 시 : 메인 페이지로 이동
  const handleHome = () => {
    navigate("/");
    window.location.reload();
  };

  // 처음 가입한 유저일 시 : 닉네임 설정 페이지로 이동
  const handleSignup = () => {
    navigate("/Signup");
    window.location.reload();
  };

  // 현재 URL에서 'service'와 'code' 파라미터 추출
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const service = params.get("service");

  const handleLoginGet = async (service, code) => {
    if (!service || !code) {
      console.log("서비스 타입 또는 코드가 제공되지 않았습니다.");
      return;
    }

    try {
      const url = `https://api.oneulmohae.co.kr/oauth2/authorization/${service}?code=${code}`;
      const res = await axios.get(url);

      if (res.status === 200) {
        // 토큰 localStorage에 저장
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        // 신규/기존 회원 여부에 따라 페이지 이동
        res.data.isExistingMember ? handleHome() : handleSignup();
      } else {
        console.error(`로그인 실패: 서버 오류 ${res.status}`);
        alert("로그인 처리 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("로그인 GET 요청 에러:", error);
      alert("로그인 처리 중 예기치 못한 문제가 발생했습니다.");
    }
  };

  useEffect(() => {
    if (code && service) {
      handleLoginGet(service, code);
    } else {
      console.log("로그인을 재시도하세요.");
    }
  }, [code, service, navigate]);

  return (
    <>
      <Loading />
    </>
  );
};

export default LoginLoading;
