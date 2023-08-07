import styles from "./Review.module.css";
import ProfileImg from "../../../assets/profile-img.jpg"


export const Review = () => (
  <>
  
      <div className={styles["detail-review-box"]}>
        <div className={styles["detail-review-inner-top-container"]}>
          <div className={styles["detail-review-img-nick-container"]}>
          <div className={styles["detail-review-img-container"]}> <img src={ProfileImg} alt="프로필 이미지" style={{width: "32px", height: "32px"}} /></div>
            <span className={styles["detail-review-profile-name"]}>이니</span>
          </div>
          <span className={styles["detail-review-date"]}>2023/07/03</span>
        </div>
        <span className={styles["detail-review-content"]}>마쉬써요</span>
      </div>

  </>
);
