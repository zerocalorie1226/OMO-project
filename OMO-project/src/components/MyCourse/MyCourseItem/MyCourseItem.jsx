import styles from "./MyCourseItem.module.css";
import {useNavigate} from "react-router-dom";

const MyCourseItem = ({writerName, courseId, courseName, createdAt}) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/MyCourseDetail/${courseId}`);
  };

  const formatDate = (dateString) => {
    const options = {year: "numeric", month: "2-digit", day: "2-digit"};
    const date = new Date(dateString);
    // Replace '.' with '. ' and trim extra spaces
    return date.toLocaleDateString("ko-KR", options).replace(/\./g, ". ").trim();
  };

  return (
    <div className={styles["mycourse-item-container"]} onClick={goDetail}>
      <div className={styles["mycourse-item-title"]}>{writerName}의 {courseName}</div>
      <div className={styles["mycourse-item-date"]}>{formatDate(createdAt)}</div>
    </div>
  );
};

export default MyCourseItem;
