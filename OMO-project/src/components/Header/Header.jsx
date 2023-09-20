import styles from "./Header.module.css";
import MainLogo from "../../assets/logo-main.png";
import {Link} from "react-router-dom";

export const Header = () => (
  <>
    <header>
      <div className={styles["main-header-container"]}>
        <ul>
          <li>
            <Link to="/">
              <img src={MainLogo} alt="메인 로고" />
            </Link>
          </li>
          <li>
            <Link to="/MyCourseBoard">커뮤니티</Link>
          </li>
          <li>
            <Link to="/MyCourseMain">나만의 코스</Link>
          </li>
          <li>
            <Link to="/Notice">공지사항</Link>
          </li>
          <li>
            <Link to="/Login" className={styles["main-header-login"]}>
              로그인
            </Link>
          </li>
          <li>
            <Link to="/MyInfo" className={styles["main-header-login"]}>
              마이 페이지
            </Link>
          </li>
        </ul>
      </div>
      <hr />
    </header>
  </>
);
