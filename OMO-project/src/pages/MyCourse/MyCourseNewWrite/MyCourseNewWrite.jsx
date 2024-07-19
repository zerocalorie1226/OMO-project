//  작성페이지 (New)

import {useNavigate} from "react-router-dom";
import MyCourseEditor from "../../../components/MyCourseEditor/MyCourseEditor";
import {useEffect} from "react";

const MyCourseNewWrite = ({isLoggedIn}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인 후 이용 가능한 서비스입니다.");
      navigate("/Login", {replace: true});
    }
  }, [isLoggedIn, navigate]);
  return <MyCourseEditor />;
};
export default MyCourseNewWrite;
