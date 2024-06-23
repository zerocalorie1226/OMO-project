import styles from "./MyCourseDetailBox.module.css";
import Like from "../../assets/detail/purple-thumb.png";
import Jjim from "../../assets/detail/red-heart.png";
import {data} from "../../const/data";
import downArrow from "../../assets/my-course/write/down-arrow.png";

export const MyCourseDetailBox = (el) => {

  console.log(el);

  return (
    <div className={styles["mycourse-data-box-total-container"]}>
      <div href="#" className={styles["mycourse-data-box-box-container"]}>
        <div className={styles["mycourse-data-box-box-inner-container"]}>
          <span className={styles["mycourse-data-box-box-title"]}>{el.place_name}</span>

          <div className={styles["mycourse-data-box-box-like-jjim-container"]}>
            <div className={styles["mycourse-data-box-box-jjim"]}>
              <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "2px", width: "20px", height: "20px"}} />{" "}
              <span className={styles["mycourse-data-box-box-jjim-number"]}> {el.mine}</span>
            </div>
            <div className={styles["mycourse-data-box-box-like"]}>
              <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "0px", width: "20px", height: "20px"}} />{" "}
              <span className={styles["mycourse-data-box-box-like-number"]}> {el.recommend}</span>
            </div>
          </div>

          <span className={`${styles["mycourse-data-box-box-phone"]} ${!el.phone ? styles["not_provided"] : ""}`}>{el.phone ? el.phone : "전화번호 미제공"}</span>
          <span className={styles["mycourse-data-box-box-address-brief"]}>{el.road_address_name}</span>
          <img className={styles["mycourse-data-box-box-img1"]} src={el.src1} />
          <img className={styles["mycourse-data-box-box-img2"]} src={el.src2} />
          <img className={styles["mycourse-data-box-box-img3"]} src={el.src3} />
        </div>
      </div>
    </div>
  );
};

export default MyCourseDetailBox;
