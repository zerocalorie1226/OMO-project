import { useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const LoginLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL 쿼리 파라미터에서 토큰을 받아오는 로직 시뮬레이션
    const token = new URLSearchParams(window.location.search).get('token');
    
    if (token) {
      localStorage.setItem('token', token);
      
      // 사용자가 새로운 사용자인지 기존 사용자인지 확인하는 로직 (백엔드 로직에 따라 달라짐)
      const isNewUser = checkIfNewUser(token); // 이 함수를 구현해야 함
      
      if (isNewUser) {
        handleSignup();
      } else {
        handleHome();
      }
    } else {
      console.error("로그인 리디렉션 후 토큰을 받지 못했습니다.");
      navigate("/login"); // 토큰을 받지 못했다면 로그인 페이지로 리디렉션
    }
  }, []);

  // 기존 사용자일 경우 메인 페이지로 이동
  const handleHome = () => {
    navigate("/");
    window.location.reload();
  };

  // 새로운 사용자일 경우 회원가입 페이지로 이동
  const handleSignup = () => {
    navigate("/signup");
    window.location.reload();
  };

  return (
    <>
      <Loading />
    </>
  );
};

export default LoginLoading;
