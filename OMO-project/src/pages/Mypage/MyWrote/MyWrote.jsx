import Mypage from "../../../components/Mypage/Mypage";
import styles from "./MyWrote.module.css";
import MyWroteIcon from "../../../assets/my-page/my-info/my-writing.png";
import MyPageFilter from "../../../components/MypageFilter/MypageFilter";
import MypageWroteMain from "../../../components/MypageWroteMain/MypageWroteMain";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {myPageWrote} from "../../../const/myPageWrote";

const MyWrote = () => (
  <div className={styles["myWrote-total-container"]}>
    <h2 className={styles["myWrote-title-container"]}>
      <img src={MyWroteIcon} alt="내가 쓴 글 아이콘" /> 내가 쓴 글
    </h2>
    <div className={styles["myWrote-categories-filter-main-container"]}></div>
    <Mypage />

    <div className={styles["myWrote-filter-main-container"]}>
      <MyPageFilter />
      <div className={styles["myWrote-main-container"]}>
        <div className={styles["myWrote-main-title-container"]}>
          <p className={styles["myWrote-main-subTitle-division"]}>구분</p>
          <p className={styles["myWrote-main-subTitle-title"]}>제목</p>
          <p className={styles["myWrote-main-subTitle-date"]}>작성일</p>
        </div>
        {myPageWrote.map((el) => {
          return <MypageWroteMain key={el.id} title={el.title} division={el.division} date={el.date} />;
        })}
      </div>
    </div>
    <ScrollToTop />
  </div>
);
export default MyWrote;
