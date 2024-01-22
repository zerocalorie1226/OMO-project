import styles from "./CommunityMyCourseList.module.css";
import Like from "../../assets/community/my-course-board/empty-thumb.png"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; 


const CommunityMyCourseList = (props) => {
  const navigate = useNavigate(); 
  return(
  <div className={styles["community-mycourse-list-container"]} onClick={() => { navigate(`/MyCourseOthersVersion/${props.id}`); }}>
    <span className={styles["community-mycourse-list-title"]}>{props.title}</span>
    <div className={styles["community-mycourse-list-like"]}>
    <img src={Like} alt="좋아요 아이콘" /> <span className={styles["community-mycourse-list-like-number"]}> {props.like}</span>
     </div>
     <div className={styles["community-mycourse-list-nick"]}><span>{props.nick}</span></div>
    <span className={styles["community-mycourse-list-date"]}>{props.reg_at}</span>
  </div>
);
  };

export default CommunityMyCourseList;