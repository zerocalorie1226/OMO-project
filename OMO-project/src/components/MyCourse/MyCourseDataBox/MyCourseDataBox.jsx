import styles from "./MyCourseDataBox.module.css";
import Like from "../../../assets/detail/purple-thumb.png";
import Jjim from "../../../assets/detail/red-heart.png";
import defaultDetailIcon from "../../../assets/detail/defaultDetailIcon.png";

export const MyCourseDataBox = ({data}) => {
  return (
    <div className={styles["mycourse-data-box-total-container"]}>
      <div href="#" className={styles["mycourse-data-box-box-container"]}>
        <div className={styles["mycourse-data-box-box-inner-container"]}>
          <span className={styles["mycourse-data-box-box-title"]}>{data.place_name}</span>

          <div className={styles["mycourse-data-box-box-like-jjim-container"]}>
            <div className={styles["mycourse-data-box-box-jjim"]}>
              <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "2px", width: "20px", height: "20px"}} />
              <span className={styles["mycourse-data-box-box-jjim-number"]}> {data.mine}</span>
            </div>
            <div className={styles["mycourse-data-box-box-like"]}>
              <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "0px", width: "20px", height: "20px"}} />
              <span className={styles["mycourse-data-box-box-like-number"]}> {data.recommend}</span>
            </div>
          </div>

          <span className={`${styles["mycourse-data-box-box-phone"]} ${!data.phone ? styles["not_provided"] : ""}`}>{data.phone ? data.phone : "전화번호 미제공"}</span>
          <span className={styles["mycourse-data-box-box-address-brief"]}>{data.road_address_name}</span>

          {data.src1 ? (
            <img className={styles["mycourse-data-box-box-img1"]} src={data.src1} alt="list image 1" />
          ) : (
            <img className={styles["mycourse-data-box-box-img1"]} src={defaultDetailIcon} alt="default list image 1" />
          )}
          
          {data.src2 ? (
            <img className={styles["mycourse-data-box-box-img2"]} src={data.src2} alt="list image 2" />
          ) : (
            <img className={styles["mycourse-data-box-box-img2"]} src={defaultDetailIcon} alt="default list image 2" />
          )}
        </div>
      </div>
      <img src={data.downArrow} className={styles["mycourse-data-box-down-arrow-img"]} />
    </div>
  );
};

export default MyCourseDataBox;
