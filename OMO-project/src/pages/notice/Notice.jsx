import Filter from "../../components/Filter/Filter";
import styles from "./Notice.module.css";
import { noticeFilter } from './../../const/noticeFilter';
import {notice} from "../../const/notice";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";
import NoticeItems from "./../../components/NoticeItems/NoticeItems";

const Notice = () => (
  <div className={styles["notice-container"]}>
    <h2 className={styles["notice-title"]}> 공지사항</h2>
    <div className={styles["notice-filter-container"]}>
      {noticeFilter.map((el) => {
        return <Filter key={el.id} {...el} />;
      })}
    </div>
    
    <hr className={styles["notice-container-hr"]}/>

    <div className={styles["notice-main-container"]}>
      {notice.map((el) => {
        return <NoticeItems key={el.id} {...el} />;
      })}
    </div>
    <ScrollToTop />
  </div>
);

export default Notice;
