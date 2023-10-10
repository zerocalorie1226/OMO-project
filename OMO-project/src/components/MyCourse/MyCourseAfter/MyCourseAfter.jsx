import styles from "./MyCourseAfter.module.css";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import MyCourseFindBox from "../MyCourseFindBox/MyCourseFindBox";
import MyCoursePlusBox from "../MyCoursePlusBox/MyCoursePlusBox";
import Delete from "../Button/Delete/Delete";
import React, {useState} from "react";

const MyCourseAfter = () => {
  const [myCourseFindBoxes, setMyCourseFindBoxes] = useState([]);

  const addMyCourseFindBox = () => {
    setMyCourseFindBoxes([...myCourseFindBoxes, <MyCourseFindBox key={myCourseFindBoxes.length} />]);
  };

  return (
    <div className={styles["mycourse-after-total-container"]}>
      {myCourseFindBoxes}

      <MyCoursePlusBox onPlusButtonClick={addMyCourseFindBox} />
    </div>
  );
};

export default MyCourseAfter;
