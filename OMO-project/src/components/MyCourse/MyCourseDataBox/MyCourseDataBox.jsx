import styles from "./mycoursedatabox.module.css";
import Like from "../../../assets/detail/empty-thumb.png";
import Jjim from "../../../assets/detail/empty-heart.png";

export const MyCourseDataBox = ({data}) => {
  return (
    <div className={styles["mycourse-data-box-total-container"]}>
      <div href="#" className={styles["mycourse-data-box-box-container"]}>
        <div className={styles["mycourse-data-box-box-inner-container"]}>
          <span className={styles["mycourse-data-box-box-title"]}>{data.title}</span>

          <div className={styles["mycourse-data-box-box-like-jjim-container"]}>
            <div className={styles["mycourse-data-box-box-jjim"]}>
              <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "1px", width: "19px", height: "19px"}} />{" "}
              <span className={styles["mycourse-data-box-box-jjim-number"]}> {data.jjim}</span>
            </div>
            <div className={styles["mycourse-data-box-box-like"]}>
              <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "0px", width: "18px", height: "18px"}} />{" "}
              <span className={styles["mycourse-data-box-box-like-number"]}> {data.like}</span>
            </div>
          </div>

          <span className={`${styles["mycourse-data-box-box-runtime"]} ${data.runTime === "영업 준비 중" ? styles["ready"] : ""} `}> {data.runTime}</span>

          <span className={styles["mycourse-data-box-box-address-brief"]}>{data.addressBrief}</span>
          <img className={styles["mycourse-data-box-box-img1"]} src={data.src1} />
          <img className={styles["mycourse-data-box-box-img2"]} src={data.src2} />
        </div>
      </div>
      <img src={data.downArrow} className={styles["mycourse-data-box-down-arrow-img"]} />
    </div>
  );
};

export default MyCourseDataBox;
