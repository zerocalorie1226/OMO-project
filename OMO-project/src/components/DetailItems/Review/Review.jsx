import styles from "./Review.module.css";
import ProfileImg from "../../../assets/profile-img.jpg"
import { elapsedText } from './../../../utils/Time/elapsedText';

export const Review = ({id, author, created_date, src, content}) => {
  return (
    <>
      <div className={styles["detail-review-box"]}>
        <div className={styles["detail-review-inner-top-container"]}>
          <div className={styles["detail-review-profile"]}>
            <div className={styles["detail-review-profile-img"]}>
              <img src={ProfileImg} alt="프로필 이미지" style={{width: "50px", height: "50px"}} />
            </div>
            <span className={styles["detail-review-profile-nick"]}>이니</span>
          </div>
          <span className={styles["detail-review-date"]}>{elapsedText(new Date(created_date)).toLocaleString()}</span>
        </div>
        <span className={styles["detail-review-content"]}>{content}</span>
      </div>
    </>
  );
};
