import styles from "./LoginLoading.module.css";
import { useNavigate } from 'react-router-dom';

const LoginLoading = () => {
  // const navigate = useNavigate();

  // // 이미 가입한 유저일 시 : 메인 페이지로 이동
  // const handleHome = () => {
  //   navigate("/");
  //   window.location.reload();
  // };

  // // 처음 가입한 유저일 시 : 닉네임 설정 페이지로 이동
  // const handleSignup = () => {
  //   navigate("/Signup");
  //   window.location.reload();
  // };

  // // 현재 url에서 code 부분 추출
  // const params = new URLSearchParams(window.location.search);
  // const code = params.get("code");

  // const handleLoginPost = async code => {
  //   const data = {
  //     code: code,
  //   };
  //   try {
  //     const res = await axios.post(
  //       // "https://server.bageasy.net/auth/login",
  //       data,
  //     );
  //      // 토큰 localstorage에 저장
  //      const accessToken = res.data.accessToken;
  //      localStorage.setItem("accesstoken", accessToken);
  //      // 신규/기존 회원 여부에 따라 페이지 이동
  //      res.data.isExistingMember ? handleHome() : handleLoginPost();
  //   } catch (error) {
  //     console.log("로그인 post 에러");
  //   }
  // };

  // useEffect(() => {
  //   if (code) {
  //     handleLoginPost(code);
  //   } else {
  //     console.log("로그인 재시도하세요.");
  //   }
  // }, [code, navigate]);

  return (
    <div>
      {/* <LoadingIcon src={loading} /> */}
      <div className={styles["login-loading-container"]}>로그인중입니다...</div>
    </div>
  );
};

export default LoginLoading;