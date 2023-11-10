import styles from "./MyCourseItemListBox.module.css";
import Like from "../../assets/my-page/interest/empty-thumb.png";
import Jjim from "../../assets/my-page/interest/empty-heart.png";
import {Link} from "react-router-dom";

export const MyCourseItemListBox = (props) => (
  <>
    <div className={styles["mycourse-list-box-inner-container"]}>
      <span className={styles["mycourse-list-box-title"]}>{props.title}</span>

      <div className={styles["mycourse-list-box-like-jjim-container"]}>
        <div className={styles["mycourse-list-box-jjim"]}>
          <img src={Jjim} alt="찜 아이콘" /> <span className={styles["mycourse-list-box-jjim-number"]}> {props.jjim}</span>
        </div>
        <div className={styles["mycourse-list-box-like"]}>
          <img src={Like} alt="좋아요 아이콘" /> <span className={styles["mycourse-list-box-like-number"]}> {props.like}</span>
        </div>
      </div>

      <span className={styles["mycourse-list-box-runtime"]}>{props.runTime}</span>
      <span className={styles["mycourse-list-box-address-brief"]}>{props.addressBrief}</span>
      <img className={styles["mycourse-list-box-img1"]} src={props.img1} />
      <img className={styles["mycourse-list-box-img2"]} src={props.img2} />
    </div>
  </>
);
