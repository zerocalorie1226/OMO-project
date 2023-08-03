import styles from "./My-info.module.css";

import Mypage from "../../../components/Mypage/Mypage";
import LogoCircle from "../../../assets/logo-circle.png";
import MyInfoIcon from "../../../assets/my-page/my-info/my-info.png";

const MyInfo = () => (
  <>
    <h2 className={styles["myInfo-title-container"]}>
      <img src={MyInfoIcon} alt="내 정보 아이콘" /> 내 정보
    </h2>
    <div className={styles["myInfo-categories-hr-container"]}>
      <Mypage />
      <hr className={styles["myInfo-hr-container"]} />
    </div>
  </>
);

export default MyInfo;
