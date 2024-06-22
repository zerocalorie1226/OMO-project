import styles from "./MyCourseAfter.module.css";
import MyCourseFindBox from "../MyCourseFindBox/MyCourseFindBox";
import MyCoursePlusBox from "../MyCoursePlusBox/MyCoursePlusBox";
import React, {useState} from "react";

const MyCourseAfter = ({time, setTime, content, setContent}) => {

  const getStringDate = (time) => {
    return time.toISOString().slice(0, 16);
  };
  const [myCourseFindBoxes, setMyCourseFindBoxes] = useState([]);

  const addMyCourseFindBox = () => {
    setMyCourseFindBoxes([...myCourseFindBoxes, <MyCourseFindBox time={time} setTime={setTime} content={content} setContent={setContent} key={myCourseFindBoxes.length} idx={time.length} />]);
    setTime([...time,  getStringDate(new Date())])
  };

  return (
    <div className={styles["mycourse-after-total-container"]}>
      {myCourseFindBoxes}

      <MyCoursePlusBox onPlusButtonClick={addMyCourseFindBox} />
    </div>
  );
};

export default MyCourseAfter;
