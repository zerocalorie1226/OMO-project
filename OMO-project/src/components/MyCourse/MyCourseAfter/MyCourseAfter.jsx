import styles from "./MyCourseAfter.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import MyCourseFindBox from "../MyCourseFindBox/MyCourseFindBox";
import MyCoursePlusBox from "../MyCoursePlusBox/MyCoursePlusBox";
import Delete from "../Button/Delete/Delete";
import React, {useState} from "react";

const MyCourseAfter = ({date, setDate, content, setContent}) => {
  const [myCourseFindBoxes, setMyCourseFindBoxes] = useState([]);

  const addMyCourseFindBox = () => {
    setMyCourseFindBoxes([...myCourseFindBoxes, <MyCourseFindBox date={date} setDate={setDate} content={content} setContent={setContent} key={myCourseFindBoxes.length} />]);
  };

  return (
    <div className={styles["mycourse-after-total-container"]}>
      {myCourseFindBoxes}

      <MyCoursePlusBox date={date} setDate={setDate} onPlusButtonClick={addMyCourseFindBox} content={content} setContent={setContent} />
    </div>
  );
};

export default MyCourseAfter;
