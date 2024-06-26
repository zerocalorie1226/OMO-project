import styles from "./MyCourseDetailBox.module.css";
import Like from "../../assets/detail/purple-thumb.png";
import EmptyLike from "../../assets/detail/empty-thumb.png";
import Jjim from "../../assets/detail/red-heart.png";
import EmptyJjim from "../../assets/detail/empty-heart.png";

export const MyCourseDetailBox = (el) => {
  const data = el.placeData;

  return (
    <div className={styles["mycourse-data-box-total-container"]}>
      <div href="#" className={styles["mycourse-data-box-box-container"]}>
        <div className={styles["mycourse-data-box-box-inner-container"]}>
          <span className={styles["mycourse-data-box-box-title"]}>{data.place_name}</span>

          <div className={styles["mycourse-data-box-box-like-jjim-container"]}>
            <div className={styles["mycourse-data-box-box-jjim"]}>
              <img src={data.myMine ? Jjim : EmptyJjim} alt="찜 아이콘" style={{position: "absolute", top: "2px", width: "20px", height: "20px"}} />{" "}
              <span className={styles["mycourse-data-box-box-jjim-number"]}> {data.mine}</span>
            </div>
            <div className={styles["mycourse-data-box-box-like"]}>
              <img src={data.myRecommend ? Like : EmptyLike} alt="좋아요 아이콘" style={{position: "absolute", top: "0px", width: "20px", height: "20px"}} />{" "}
              <span className={styles["mycourse-data-box-box-like-number"]}> {data.recommend}</span>
            </div>
          </div>

          <span className={`${styles["mycourse-data-box-box-phone"]} ${!data.phone ? styles["not_provided"] : ""}`}>{data.phone ? data.phone : "전화번호 미제공"}</span>
          <span className={styles["mycourse-data-box-box-address-brief"]}>{data.road_address_name}</span>
          <img className={styles["mycourse-data-box-box-img1"]} src={data.src1} />
          <img className={styles["mycourse-data-box-box-img2"]} src={data.src2} />
          <img className={styles["mycourse-data-box-box-img3"]} src={data.src3} />
        </div>
      </div>
    </div>
  );
};

export default MyCourseDetailBox;
