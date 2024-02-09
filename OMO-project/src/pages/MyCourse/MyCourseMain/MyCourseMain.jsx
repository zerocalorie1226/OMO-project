// 나만의 코스 메인페이지 (Home)
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyCourseStateContext } from "../../../App";
import { ScrollToTop } from "../../../components/ScrollToTop/ScrollToTop";
import { WritingButton } from "../../../components/WritingButton/WritingButton";
import MyCourseList from "../../../components/MyCourse/MyCourseList/MyCourseList";
import styles from "./MyCourseMain.module.css";

const MyCourseMain = () => {
  const myCourseList = useContext(MyCourseStateContext);

  return (
    <div className={styles["mycourse-container"]}>
      <h2 className={styles["mycourse-title"]}>나만의 코스</h2>
      {myCourseList.length === 0 ? (
        <div className={styles["no-boardlist"]}>
          글 작성 내역이 없습니다. 우측 하단에 있는 글쓰기 버튼을 통해 게시글을 작성해주세요.
        </div>
      ) : (
        <div className={styles["mycourse-list-container"]}>
          <MyCourseList myCourseList={myCourseList} />
        </div>
      )}
      
      <ScrollToTop />
      <Link to="/MyCourseNewWrite">
        <WritingButton />
      </Link>
    </div>
  );
};

export default MyCourseMain;
