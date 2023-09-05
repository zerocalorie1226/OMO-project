import styles from "./MyCourseMyVersionEdit.module.css";
import pencil from "../../../assets/my-course/write/gray-pencil.png";
import MyCoursePlusBox from "../../../components/MyCourse/MyCoursePlusBox/MyCoursePlusBox";
import MyCourseSearchBox from "../../../components/MyCourse/MyCourseSearchBox/MyCourseSearchBox";
import MyCourseAfter from "../../../components/MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import Save from "../../../components/MyCourse/Button/Save/Save";
import EditShare from "../../../components/MyCourse/Button/Edit-Share/Edit-Share";
import {data} from "../../../const/data";
import {ListBox} from "../../../components/ListBox/ListBox";
import downArrow from "../../../assets/my-course/write/down-arrow.png";
import MyCourseDataBox from "../../../components/MyCourse/MyCourseDataBox/MyCourseDataBox";

const MyCourseMyVersionEdit = () => {
  const myCourseMyVersionEdit1 = data.find((item) => item.id === 1);
  const myCourseMyVersionEdit2 = data.find((item) => item.id === 2);
  const myCourseMyVersionEdit7 = data.find((item) => item.id === 7);
  return (
    <div className={styles["mycoursemyversionedit-total-container"]}>
      <div className={styles["mycoursemyversionedit-title-container"]}>
        <span className={styles["mycoursemyversionedit-title"]}>킹부엉의 인천 맛집 탐방</span>
      </div>

      <MyCourseDataBox
        key={myCourseMyVersionEdit1.id}
        like={myCourseMyVersionEdit1.like}
        jjim={myCourseMyVersionEdit1.jjim}
        title={myCourseMyVersionEdit1.title}
        addressBrief={myCourseMyVersionEdit1.addressBrief}
        intro={myCourseMyVersionEdit1.intro}
        runTime={myCourseMyVersionEdit1.runTime}
        img1={myCourseMyVersionEdit1.src1}
        img2={myCourseMyVersionEdit1.src2}
        downArrow={myCourseMyVersionEdit1.downarrow}
      />
      <MyCourseDataBox
        key={myCourseMyVersionEdit2.id}
        like={myCourseMyVersionEdit2.like}
        jjim={myCourseMyVersionEdit2.jjim}
        title={myCourseMyVersionEdit2.title}
        addressBrief={myCourseMyVersionEdit2.addressBrief}
        intro={myCourseMyVersionEdit2.intro}
        runTime={myCourseMyVersionEdit2.runTime}
        img1={myCourseMyVersionEdit2.src1}
        img2={myCourseMyVersionEdit2.src2}
        downArrow={myCourseMyVersionEdit2.downarrow}
      />
      <MyCourseDataBox
        key={myCourseMyVersionEdit7.id}
        like={myCourseMyVersionEdit7.like}
        jjim={myCourseMyVersionEdit7.jjim}
        title={myCourseMyVersionEdit7.title}
        addressBrief={myCourseMyVersionEdit7.addressBrief}
        intro={myCourseMyVersionEdit7.intro}
        runTime={myCourseMyVersionEdit7.runTime}
        img1={myCourseMyVersionEdit7.src1}
        img2={myCourseMyVersionEdit7.src2}
        downArrow={myCourseMyVersionEdit7.downarrow}
      />

      <MyCoursePlusBox />
      <Save />
      <ScrollToTop />
    </div>
  );
};

export default MyCourseMyVersionEdit;
