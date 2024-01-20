import styles from "./MyCourseOthersVersion.module.css";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {data} from "../../../const/data";
import ComeBackList from "../../../components/MyCourse/Button/ComeBackList/ComeBackList";
import MyCourseCalendar from "./../../../components/MyCourse/MyCourseCalendar/MyCourseCalendar";
import {Link} from "react-router-dom";
import {MyCourseOthersDataBox} from "./../../../components/MyCourseOthersDataBox/MyCourseOthersDataBox";
import { communityMyCourse } from "../../../const/communityMyCourse";
import { useParams } from "react-router-dom";

const MyCourseOthersVersion = () => {
  const {id} = useParams();

  const targetData = communityMyCourse.find(  
    (it) => parseInt(it.id) === parseInt(id)
  );
  console.log(communityMyCourse);
  console.log(data);
  const MyCourseOthersDataBox1 = data.find((item) => item.id === 1);
  const MyCourseOthersDataBox2 = data.find((item) => item.id === 2);
  const MyCourseOthersDataBox3 = data.find((item) => item.id === 3);
  
  return (
    <div className={styles["mycourse-detail-total-container"]}>
      <div className={styles["mycourse-detail-title-container"]}>
        <span>{targetData.title}</span>
      </div>
      <div className={styles["mycourse-detail-course-container"]}>
        <div className={styles["mycourse-detail-course-item-container"]}>
          <div className={styles["mycourse-detail-calendar-container"]}>2024년 1월 20일 오후 12:00</div>
          <MyCourseOthersDataBox key={MyCourseOthersDataBox1.id} {...MyCourseOthersDataBox1} />
        </div>
        <div className={styles["mycourse-detail-course-item-container"]}>
          <div className={styles["mycourse-detail-calendar-container"]}>2024년 1월 20일 오후 12:00</div>
          <MyCourseOthersDataBox key={MyCourseOthersDataBox2.id} {...MyCourseOthersDataBox2} />
        </div>
        <div className={styles["mycourse-detail-course-item-container"]}>
          <div className={styles["mycourse-detail-calendar-container"]}>2024년 1월 20일 오후 12:00</div>
          <MyCourseOthersDataBox key={MyCourseOthersDataBox3.id} {...MyCourseOthersDataBox3} />
        </div>
      </div>
      <div className={styles["mycourse-detail-edit-share-button-container"]}>
      </div>
       <Link to="/MyCourseBoard">
      <ComeBackList />
    </Link>
      <ScrollToTop />
    </div>

    // < className={styles["mycourse-othersversion-total-container"]}>
    //   <div className={styles["mycourse-othersversion-title-container"]}>
    //     <span className={styles["mycourse-othersversion-title"]}>킹부엉의 인천 맛집 탐방</span>
    //   </div>
    //   <div className={styles["mycourse-othersversion-calendar-container"]}>
    //     <MyCourseCalendar />
    //   </div>
    // <MyCourseOthersDataBox
    //   key={MyCourseOthersVersion1.id} {...MyCourseOthersVersion1}
    // />
    //   <div className={styles["mycourse-othersversion-calendar-container"]}>
    //     <MyCourseCalendar />
    //   </div>
    //   <MyCourseOthersDataBox
    //     key={MyCourseOthersDataBox2.id} {...MyCourseOthersDataBox2}
    //   />
    //   <div className={styles["mycourse-othersversion-calendar-container"]}>
    //     <MyCourseCalendar />
    //   </div>
    //   <MyCourseOthersDataBox
    //     key={MyCourseOthersVersion8.id} {...MyCourseOthersVersion8}
    //   />
    // <Link to="/MyCourseBoard">
    //   <ComeBackList />
    // </Link>
    // <ScrollToTop />
  );
};

export default MyCourseOthersVersion;
