import styles from "./CommunityMyCourseList.module.css";
import Like from "../../assets/community/my-course-board/empty-thumb.png"

const CommunityMyCourseList = (props) => (
  <a href="#" className={styles["community-mycourse-list-container"]}>
    <span className={styles["community-mycourse-list-title"]}>{props.data.title}</span>
    <div className={styles["community-mycourse-list-like"]}>
    <img src={Like} alt="좋아요 아이콘" /> <span className={styles["community-mycourse-list-like-number"]}> {props.data.like}</span>
     </div>
     <div className={styles["community-mycourse-list-nick"]}><span>{props.data.nick}</span></div>
    <span className={styles["community-mycourse-list-date"]}>{props.data.reg_at}</span>
  </a>
);

export default CommunityMyCourseList;
