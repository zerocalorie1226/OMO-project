import styles from "./MyCourseCalendar.module.css";

const MyCourseCalendar = ({time, setTime, idx}) => {
  const arrTime = (e) => {
    const newTime = [...time];
    newTime[idx] = e.target.value;
    setTime(newTime);
  };

  return (
    <input
      className={styles["mycourse-time-container"]}
      type="datetime-local"
      id="meeting-time"
      name="meeting-time"
      value={time[idx]}
      onChange={arrTime}
    />
  );
};

export default MyCourseCalendar;
