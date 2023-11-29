import MyCourseList from "../../../components/MyCourse/MyCourseList/MyCourseList";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import {myCourse} from "../../../const/myCourse";
import styles from "./MyCourseMain.module.css";
import {Link} from "react-router-dom";

const MyCourseMain = () => (
  <div className={styles["mycourse-container"]}>
    <h2 className={styles["mycourse-title"]}> 나만의 코스 </h2>

    {myCourse.map((el) => {
      return <MyCourseList key={el.id} {...el} />;
    })}

    <ScrollToTop />
    <Link to="/MyCourseWrite">
      <WritingButton />
    </Link>
  </div>
);

export default MyCourseMain;
