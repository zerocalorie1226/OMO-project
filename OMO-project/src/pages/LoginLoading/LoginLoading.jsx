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
    
    // URL에서 필요한 값들을 가져옵니다.
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');
    const isExistingMember = params.get('isExistingMember');
    const memberId = params.get('memberId');
    
    console.log('accessToken:', accessToken);
    console.log('refreshToken:', refreshToken);
    console.log('isExistingMember:', isExistingMember);
    console.log('memberId:', memberId);

    // 로컬 스토리지에 토큰과 멤버 정보를 저장합니다.
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('isExistingMember', isExistingMember);
    localStorage.setItem('memberId', memberId);

    // 사용자 상태에 따라 다른 페이지로 리디렉션합니다.
    if (isExistingMember === 'true') {
      console.log("기존 멤버로 확인됨, 홈으로 이동");
      navigate("/"); // 기존 멤버일 경우 홈 페이지로 이동
    } else {
      console.log("새로운 멤버로 확인됨, Signup 페이지로 이동");
      navigate("/Signup"); // 새 멤버일 경우 회원가입 페이지로 이동
    } 

    setLoading(false);
  }, [navigate]);

  if (loading) {
    return <Loading />;
  }

  // return null;
};

export default LoginLoading;
