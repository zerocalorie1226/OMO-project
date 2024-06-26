import styles from "./MyCourseItem.module.css";
import {useNavigate} from "react-router-dom";

const MyCourseItem = ({courseId, courseName, createdAt}) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/MyCourseDetail/${courseId}`);
  };

  const formatDate = (dateString) => {
    const options = {year: "numeric", month: "2-digit", day: "2-digit"};
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", options).replace(/\./g, ".").replace(/ /g, "");
  };

  return (
    <div className={styles["mycourse-item-container"]} onClick={goDetail}>
      <div className={styles["mycourse-item-title"]}>{courseName}</div>
      <div className={styles["mycourse-item-date"]}>{formatDate(createdAt)}</div>
    </div>
  );
};

export default MyCourseItem;
