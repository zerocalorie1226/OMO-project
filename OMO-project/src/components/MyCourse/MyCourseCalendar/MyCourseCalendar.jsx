import { useState } from "react";
import styles from "./MyCourseCalendar.module.css";


const MyCourseCalendar = ({dates, setDates, idx}) => {
  
// console.log(date);

const arrDates = (e) => {
  // 기존의 dates 배열을 복제합니다.
  const newDates = [...dates];
  // 특정 인덱스의 값을 변경합니다.
  newDates[idx] = e.target.value;
  // 변경된 배열을 setDates를 통해 업데이트합니다.
  setDates(newDates);
};
  
  return (
    <>
      <input
        className={styles["mycourse-time-container"]}
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value={dates[idx]}
        // onChange={(e)=>setDates(e.target.value)}
        onChange={arrDates}
        // defaultValue="2023-04-15T19:30"
        // min="2023-04-15T00:00"
        // max="2023-04-16T00:00"
      ></input>
    </>
  );
};

export default MyCourseCalendar;
