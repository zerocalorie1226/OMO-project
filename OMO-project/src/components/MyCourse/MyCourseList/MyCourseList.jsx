import {useState} from "react";
import styles from "./MyCourseList.module.css";
import MyCourseItem from "../MyCourseItem/MyCourseItem";

const MyCourseList = ({myCourseList}) => {
  return (
    <div>
      <div className={styles["mycourse-list-container"]}>
        {myCourseList.map((it) => (
          <MyCourseItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

MyCourseList.defaultProps = {
  myCourseList: [],
};

export default MyCourseList;
