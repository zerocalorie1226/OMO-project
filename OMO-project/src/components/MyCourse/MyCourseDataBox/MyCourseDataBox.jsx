import styles from "./mycoursedatabox.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import Delete from "../Button/Delete/Delete";
import Like from "../../../assets/detail/empty-thumb.png";
import Jjim from "../../../assets/detail/empty-heart.png";

const MyCourseDataBox = (props) => (
  <div className={styles["mycoursedatabox-total-container"]}>
    <a href="#" className={styles["mycoursedatabox-box-container"]}>
      <div className={styles["mycoursedatabox-box-inner-container"]}>
        <span className={styles["mycoursedatabox-box-title"]}>{props.title}</span>

        <div className={styles["mycoursedatabox-box-like-jjim-container"]}>
          <div className={styles["mycoursedatabox-box-jjim"]}>
            <button type="button">
              <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "0px", width: "23px", height: "23px"}} />{" "}
            </button>
            <span className={styles["mycoursedatabox-box-jjim-number"]}> {props.jjim}</span>
          </div>
          <div className={styles["mycoursedatabox-box-like"]}>
            <button type="button">
              <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "-1px", width: "24px", height: "24px"}} />{" "}
            </button>
            <span className={styles["mycoursedatabox-box-like-number"]}> {props.like}</span>
          </div>
        </div>

        <span className={styles["mycoursedatabox-box-runtime"]}>{props.runTime}</span>
        <span className={styles["mycoursedatabox-box-intro"]}>{props.intro}</span>
        <span className={styles["mycoursedatabox-box-address-brief"]}>{props.addressBrief}</span>
        <img className={styles["mycoursedatabox-box-img1"]} src={props.img1} />
        <img className={styles["mycoursedatabox-box-img2"]} src={props.img2} />
      </div>
    </a>
    <img src={props.downArrow} className={styles["mycoursedatabox-downArrow-img"]} />
  </div>
);

export default MyCourseDataBox;
