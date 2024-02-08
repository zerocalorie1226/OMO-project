import styles from "./CommunityMyCourseList.module.css";
import Like from "../../assets/community/my-course-board/empty-thumb.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  // 입력된 dateString을 Date 객체로 변환
  const date = new Date(dateString);
  
  // Date 객체에서 연, 월, 일을 가져와서 문자열로 조합하여 반환
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  
  return `${year}. ${month}. ${day}`;
};

const CommunityMyCourseList = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles["community-mycourse-list-container"]}
      onClick={() => {
        navigate(`/MyCourseOthersVersion/${props.id}`);
      }}
    >
      <span className={styles["community-mycourse-list-title"]}>{props.title}</span>
      <div className={styles["community-mycourse-list-like"]}>
        <img src={Like} alt="좋아요 아이콘" /> <span className={styles["community-mycourse-list-like-number"]}> {props.like}</span>
      </div>
      <div className={styles["community-mycourse-list-nick"]}>
        <span>{props.nick}</span>
      </div>
      <span className={styles["community-mycourse-list-date"]}>{formatDate(props.reg_at)}</span>
    </div>
  );
};

export default CommunityMyCourseList;
