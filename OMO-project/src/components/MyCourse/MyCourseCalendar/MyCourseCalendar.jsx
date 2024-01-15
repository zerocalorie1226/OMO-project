import { useState } from "react";
import styles from "./MyCourseCalendar.module.css";





const MyCourseCalendar = ({date, setDate}) => {
  
// console.log(date);
  
  return (
    <>
      <input
        className={styles["mycourse-time-container"]}
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value={date}
        onChange={(e)=>setDate(e.target.value)}
        // defaultValue="2023-04-15T19:30"
        // min="2023-04-15T00:00"
        // max="2023-04-16T00:00"
      ></input>
    </>
  );
};

export default MyCourseCalendar;
