import styles from "./Login.module.css";
import naver from "../../assets/login/naver-icon.png";
import google from "../../assets/login/google-icon.png";
import kakao from "../../assets/login/kakao-icon.png";

const Login = () => (
  <>
    <section className={styles["login-container"]}>
      <h2 className={styles["login-title"]}>로그인</h2>

      <div className={styles["login-community-container"]}>
        <a href="#" className={styles["login-community-kakao"]}>
          <img src={kakao} className={styles["login-community-kakao-icon"]}></img>
          <span className={styles["login-community-kakao-letter"]}>카카오 로그인</span>
        </a>
        <a href="#" className={styles["login-community-naver"]}>
          <img src={naver} className={styles["login-community-naver-icon"]}></img>
          <span className={styles["login-community-naver-letter"]}>네이버 로그인</span>
        </a>

        <a href="#" className={styles["login-community-google"]}>
          <img src={google} className={styles["login-community-google-icon"]}></img>
          <span className={styles["login-community-google-letter"]}>구글 로그인</span>
        </a>
      </div>
    </section>
  </>
);

export default Login;
