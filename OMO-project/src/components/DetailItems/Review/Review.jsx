import styles from "./Review.module.css";
import ProfileImg from "../../../assets/profile-img.jpg"
import { elapsedText } from './../../../utils/Time/elapsedText';


export const Review = ({id, author, created_date, imageSrc, content}) => {
  return (
    <>
      <div className={styles["detail-review-box"]}>
        <div className={styles["detail-review-inner-top-container"]}>
          <div className={styles["detail-review-profile"]}>
          {imageSrc && <img src={imageSrc} alt="리뷰 이미지" className={styles["detail-review-image"]} />} {/* 이미지가 있을 때만 이미지 표시 */}
            <div className={styles["detail-review-profile-img"]}>              
              <img src={ProfileImg} alt="프로필 이미지" style={{width: "50px", height: "50px", marginLeft:"16px"}} />
              <span className={styles["detail-review-profile-nick"]}>이니</span>
              <p className={styles["detail-review-content"]}>{content}</p>
            </div>
          </div>
          <span className={styles["detail-review-date"]}>{elapsedText(new Date(created_date)).toLocaleString()}</span>
        </div>
        
        
      </div>
    </>
  );
};
