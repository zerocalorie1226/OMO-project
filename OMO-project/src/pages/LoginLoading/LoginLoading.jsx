import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

const LoginLoading = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isExistingMember = params.get('isExistingMember'); // 서버에서 리디렉트 시 설정한 쿼리 파라미터

    if (loading) {
      // 사용자 상태에 따라 리디렉트
      if (isExistingMember === 'true') {
        navigate("/");
      } else if (isExistingMember === 'false') {
        navigate("/Signup");
      } else {
        // 쿼리 파라미터가 없거나 예상치 못한 값일 경우 로그인 페이지로 리다이렉트
        navigate("/login");
      }
      setLoading(false);
    }

  }, [navigate, loading]);

  // 로딩 상태를 표시
  if (loading) {
    return <Loading />;
  }

  // 로딩 상태가 해제된 후에는 추가적인 UI가 필요하지 않으므로 null 반환
  return null;
};

export default LoginLoading;
