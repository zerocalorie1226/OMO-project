import MyCourseList from "../../../components/MyCourse/MyCourseList/MyCourseList";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {myCourse} from "../../../const/mycourse";
import styles from "./MyCourse.module.css";

const MyCourse = () => (
  <div className={styles["mycourse-container"]}>
    <h2 className={styles["mycourse-title"]}> 나만의 코스 </h2>

    {myCourse.map((el) => {
      return <MyCourseList key={el.id} title={el.title} date={el.date} />;
    })}

    <ScrollToTop />
  </div>
);

export default MyCourse;
