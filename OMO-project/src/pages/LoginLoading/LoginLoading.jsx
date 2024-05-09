import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

const LoginLoading = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect 실행");

    const params = new URLSearchParams(window.location.search);
    console.log(params);
    const isExistingMember = params.get('isExistingMember');
    console.log('isExistingMember:', isExistingMember);

    if (isExistingMember === 'true') {
      console.log("기존 멤버로 확인됨, / 홈으로 이동");
      navigate("/Signup");
    } else if (isExistingMember === 'false') {
      console.log("새로운 멤버로 확인됨, /Signup 페이지로 이동");
      navigate("/Signup");
    } 

    setLoading(false);
  }, [navigate]); // 의존성 배열에서 loading을 제거했습니다.

  if (loading) {
    return <Loading />;
  }

  return null;
};

export default LoginLoading;
