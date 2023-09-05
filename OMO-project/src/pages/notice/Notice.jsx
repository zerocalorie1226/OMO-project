import Filter from "../../components/Filter/Filter";
import styles from "./Notice.module.css";
import {myCourseFilter} from "../../const/myCourseFilter";
import {notice} from "../../const/notice";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";
import NoticeItems from "./../../components/NoticeItems/NoticeItems";

const Notice = () => (
  <div className={styles["notice-container"]}>
    <h2 className={styles["notice-title"]}> 공지사항</h2>
    <div className={styles["notice-filter-container"]}>
      {myCourseFilter.map((el) => {
        return <Filter key={el.id} title={el.title} bar={el.bar} />;
      })}
    </div>
    <div className={styles["notice-main-container"]}>
      {notice.map((el) => {
        return <NoticeItems key={el.id} title={el.title} division={el.division} date={el.date} content={el.content} />;
      })}
    </div>
    <ScrollToTop />
  </div>
);

export default Notice;
