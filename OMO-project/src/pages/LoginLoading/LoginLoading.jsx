import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

const LoginLoading = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLogin = async () => {
      const params = new URLSearchParams(window.location.search);

      const accessToken = params.get("accessToken");
      const refreshToken = params.get("refreshToken");
      const isExistingMember = params.get("isExistingMember");
      const memberId = params.get("memberId");

      if (!accessToken) {
        console.error("No access token found");
        navigate("/Login");
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("isExistingMember", isExistingMember);
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("isLoggedIn", "true");

      if (isExistingMember === "true") {
        console.log("기존 멤버로 확인됨, 홈으로 이동");
        navigate("/"); // 기존 멤버일 경우 홈 페이지로 이동
        setIsLoggedIn(true);
      } else {
        console.log("새로운 멤버로 확인됨, Signup 페이지로 이동");
        navigate("/Signup"); // 새 멤버일 경우 회원가입 페이지로 이동
        setIsLoggedIn(true);
      }

      setLoading(false);
    };

    handleLogin();
  }, [navigate, setIsLoggedIn]);

  if (loading) {
    return <Loading />;
  }

  return null;
};

export default LoginLoading;
