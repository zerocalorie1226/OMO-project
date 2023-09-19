import styles from "./Header.module.css";
import MainLogo from "../../assets/logo-main.png";
import {Link} from "react-router-dom";

export const Header = () => (
  <>
    <header>
      <div className={styles["main-header-container"]}>
        <ul>
          <li>
            <Link to="/Main">
              <img src={MainLogo} alt="메인 로고" />
            </Link>
          </li>
          <li>
            <Link to="/">커뮤니티</Link>
          </li>
          <li>
            <Link to="/">나만의 코스</Link>
          </li>
          <li>
            <Link to="/">공지사항</Link>
          </li>
          <li>
            <Link to="/" className={styles["main-header-login"]}>
              로그인
            </Link>
          </li>
        </ul>
      </div>
      <hr />
    </header>
  </>
);
