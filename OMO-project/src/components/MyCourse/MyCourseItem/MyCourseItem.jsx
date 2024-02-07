// 나만의 코스 개별 아이템

import styles from "./MyCourseItem.module.css";
import {useNavigate} from "react-router-dom";

const MyCourseItem = ({id, title, dates, content}) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/MyCourseDetail/${id}`);
  };
  
  const goEdit = () => {
    navigate(`/MyCourseEdit/${id}`);
  };


  // const strDate = new Date(parseInt(dates)).toLocaleDateString();
  return (
    <>
    <div className={styles["mycourse-item-container"]} onClick={goDetail}>
      <div className={styles["mycourse-item-title"]}>{title}</div>
      {/* <div className={styles["mycourse-item-date"]}>{dates}</div> */}
    </div>
      </>
  );
};

export default MyCourseItem;
