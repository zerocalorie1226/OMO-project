import styles from "./mycoursedatabox.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import Delete from "../Button/Delete/Delete";
import Like from "../../../assets/detail/empty-thumb.png";
import Jjim from "../../../assets/detail/empty-heart.png";

const MyCourseDataBox = (props) => (
  <div className={styles["mycourse-data-box-total-container"]}>
    <div href="#" className={styles["mycourse-data-box-box-container"]}>
      <div className={styles["mycourse-data-box-box-inner-container"]}>
        <span className={styles["mycourse-data-box-box-title"]}>{props.title}</span>

        <div className={styles["mycourse-data-box-box-like-jjim-container"]}>
          <div className={styles["mycourse-data-box-box-jjim"]}>
            <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "0px", width: "23px", height: "23px"}} />{" "}
            <span className={styles["mycourse-data-box-box-jjim-number"]}> {props.jjim}</span>
          </div>
          <div className={styles["mycourse-data-box-box-like"]}>
            <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "-1px", width: "24px", height: "24px"}} />{" "}
            <span className={styles["mycourse-data-box-box-like-number"]}> {props.like}</span>
          </div>
        </div>

        <span className={styles["mycourse-data-box-box-runtime"]}>{props.runTime}</span>

        <span className={styles["mycourse-data-box-box-address-brief"]}>{props.addressBrief}</span>
        <img className={styles["mycourse-data-box-box-img1"]} src={props.src1} />
        <img className={styles["mycourse-data-box-box-img2"]} src={props.src2} />
      </div>
    </div>
    <img src={props.downArrow} className={styles["mycourse-data-box-down-arrow-img"]} />
  </div>
);

export default MyCourseDataBox;
