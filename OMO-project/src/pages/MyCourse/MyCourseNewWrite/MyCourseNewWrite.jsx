import { useNavigate } from "react-router-dom";
import MyCourseEditor from "../../../components/MyCourseEditor/MyCourseEditor";
import { useEffect } from "react";

const MyCourseNewWrite = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const memberRole = localStorage.getItem("memberRole");

    if (!loggedIn) {
      alert("로그인 후 이용 가능한 서비스입니다.");
      navigate("/Login", { replace: true });
      return;
    }

    if (memberRole === "GUEST") {
      alert("회원정보 입력이 필요합니다.");
      navigate("/Signup", { replace: true });
      return;
    }
  }, [navigate]);

  return <MyCourseEditor />;
};

export default MyCourseNewWrite;
