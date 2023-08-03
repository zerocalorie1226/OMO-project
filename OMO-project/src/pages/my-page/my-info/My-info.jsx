import styles from "./My-info.module.css";

import Mypage from "../../../components/Mypage/Mypage";
import LogoCircle from "../../../assets/logo-circle.png";
import MyInfoIcon from "../../../assets/my-page/my-info/my-info.png";
// import MyInfoHeart from "../../../assets/my-page/my-info/empty-heart.png";
// import MyInfoWrite from "../../../assets/my-page/my-info/my-writing.png";
// import MyInfoSetting from "../../../assets/my-page/my-info/profile-setting.png";
// import MyInfoRecent from "../../../assets/my-page/my-info/recent-place.png";
// import MyInfoThumb from "../../../assets/my-page/my-info/empty-thumb.png";

const MyInfo = () => (
  <>
    <h2 className={styles["myInfo-title-container"]}>
      <img src={MyInfoIcon} alt="내 정보 아이콘" /> 내 정보
    </h2>
    <Mypage />
  </>
);

export default MyInfo;
