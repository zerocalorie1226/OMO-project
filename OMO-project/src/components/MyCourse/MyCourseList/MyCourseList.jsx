// 나만의 코스 List 페이지 (DiaryList)

import {useState} from "react";
import styles from "./MyCourseList.module.css";
import MyCourseItem from "../MyCourseItem/MyCourseItem";

const sortOptionList = [
  {value: "latest", name: "최신순"},
  {value: "oldest", name: "오래된 순"},
];

const ControlMenu = ({value, onChange, optionList}) => {
  return (
    <select className={styles["mycourse-list-filter-control"]} value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const MyCourseList = ({myCourseList}) => {
  const [sortType, setSortType] = useState("latest");

  const getProcessedMyCourseList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(BeforeUnloadEvent.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(myCourseList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <div className={styles["mycourse-list-filter"]}>
        <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
      </div>

      <div className={styles["mycourse-list-container"]}>
        {getProcessedMyCourseList().map((it) => (
          <MyCourseItem key={it.id} {...it} />
        ))}
      </div>
    </div>
    // <Link to="/MyCourseMyVersion" className={styles["mycourse-list-container"]}>
    //   <p className={styles["mycourse-list-title"]}>{props.title}</p>
    //   <p className={styles["mycourse-list-date"]}>{props.reg_at}</p>
    // </Link>
  );
};

MyCourseList.defaultProps = {
  myCourseList: [],
};

export default MyCourseList;
