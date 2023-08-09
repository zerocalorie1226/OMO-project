import styles from "./Review.module.css";
import ProfileImg from "../../../assets/profile-img.jpg"


export const Review = ( {data}) => {
  return (
    <>
    
        <div className={styles["detail-review-box"]}>
          <div className={styles["detail-review-inner-top-container"]}>
            <div className={styles["detail-review-img-nick-container"]}>
            <div className={styles["detail-review-img-container"]}> <img 
            src={ProfileImg} 

            alt="프로필 이미지" style={{width: "32px", height: "32px"}} /></div>
              <span className={styles["detail-review-profile-name"]}>{data.nick}</span>
            </div>
            <span className={styles["detail-review-date"]}>{data.reg_at}</span>
          </div>
          <span className={styles["detail-review-content"]} >{data.comment}</span>
        </div>
  
    </>
  );
}

