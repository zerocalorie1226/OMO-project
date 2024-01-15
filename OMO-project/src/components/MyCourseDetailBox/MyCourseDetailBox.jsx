import styles from "./mycoursedetailbox.module.css";
import Like from "../../assets/detail/purple-thumb.png";
import Jjim from "../../assets/detail/red-heart.png";
import { data } from "../../const/data";

export const MyCourseDetailBox = () => {


  const findItem = data.find((el) => el.id === 1);
  console.log(findItem);


  return (
    <div className={styles["mycourse-data-box-total-container"]}>
      <div href="#" className={styles["mycourse-data-box-box-container"]}>
        <div className={styles["mycourse-data-box-box-inner-container"]}>
          <span className={styles["mycourse-data-box-box-title"]}>{findItem.title}</span>

          <div className={styles["mycourse-data-box-box-like-jjim-container"]}>
            <div className={styles["mycourse-data-box-box-jjim"]}>
              <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "2px", width: "20px", height: "20px"}} />{" "}
              <span className={styles["mycourse-data-box-box-jjim-number"]}> {findItem.jjim}</span>
            </div>
            <div className={styles["mycourse-data-box-box-like"]}>
              <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "0px", width: "20px", height: "20px"}} />{" "}
              <span className={styles["mycourse-data-box-box-like-number"]}> {findItem.like}</span>
            </div>
          </div>

          <span className={`${styles["mycourse-data-box-box-runtime"]} ${findItem.runTime === "영업 준비 중" ? styles["ready"] : ""} `}> {findItem.runTime}</span>

          <span className={styles["mycourse-data-box-box-address-brief"]}>{findItem.addressBrief}</span>
          <img className={styles["mycourse-data-box-box-img1"]} src={findItem.src1} />
          <img className={styles["mycourse-data-box-box-img2"]} src={findItem.src2} />
          <img className={styles["mycourse-data-box-box-img3"]} src={findItem.src3} />
        </div>
      </div>
      <img src={data.downArrow} className={styles["mycourse-data-box-down-arrow-img"]} />
    </div>
  );
};

export default MyCourseDetailBox;
