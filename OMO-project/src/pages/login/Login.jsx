import styles from "./Login.module.css";
import naver from "../../assets/login/naver-icon.png";
import google from "../../assets/login/google-icon.png";
import kakao from "../../assets/login/kakao-icon.png";

const Login = () => {

  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=21906896789-8363kp8suu6i3bq15mrfcjtfuisffcdk.apps.googleusercontent.com
		&redirect_uri=http://localhost:5173/LoginLoading
		&response_type=code
		&scope=email profile`;
  };

  return(
  <>
    <section className={styles["login-container"]}>
      <h2 className={styles["login-title"]}>로그인</h2>

      <div className={styles["login-community-container"]}>
        <button className={styles["login-community-kakao"]}>
          <img src={kakao} className={styles["login-community-kakao-icon"]}></img>
          <span className={styles["login-community-kakao-letter"]}>카카오 로그인</span>
        </button>

        <button className={styles["login-community-naver"]}>
          <img src={naver} className={styles["login-community-naver-icon"]}></img>
          <span className={styles["login-community-naver-letter"]}>네이버 로그인</span>
        </button>

        <button onClick={handleLogin}className={styles["login-community-google"]}>
          <img src={google} className={styles["login-community-google-icon"]}></img>
          <span className={styles["login-community-google-letter"]}>구글 로그인</span>
        </button>
      </div>
    </section>
  </>
);
};

export default Login;
