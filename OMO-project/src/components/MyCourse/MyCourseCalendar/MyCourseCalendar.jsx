import { useState } from "react";
import styles from "./MyCourseCalendar.module.css";


const MyCourseCalendar = ({dates, setDates, idx}) => {

const arrDates = (e) => {
  const newDates = [...dates];
  newDates[idx] = e.target.value;
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
        onChange={arrDates}
        // min="2023-04-15T00:00"
        // max="2023-04-16T00:00"
      ></input>
    </>
  );
};

export default MyCourseCalendar;
