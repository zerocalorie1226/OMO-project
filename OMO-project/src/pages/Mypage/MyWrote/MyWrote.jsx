import Mypage from "../../../components/Mypage/Mypage";
import styles from "./MyWrote.module.css";
import MyWroteIcon from "../../../assets/my-page/my-info/my-writing.png";
import MyPageFilter from "../../../components/MypageFilter/MypageFilter";
import MypageWroteMain from "../../../components/MypageWroteMain/MypageWroteMain";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {communityInquiryFrequent} from "../../../const/communityInquiryFrequent";
import {myPageWrote} from "../../../const/myPageWrote";
import CommunityInquiryBox from "../../../components/CommunityInquiryBox/CommunityInquiryBox";

const MyWrote = () => (
  <div className={styles["my-wrote-total-container"]}>
    <h2 className={styles["my-wrote-title-container"]}>
      <img src={MyWroteIcon} alt="내가 쓴 글 아이콘" /> 내가 쓴 글
    </h2>
   
    <Mypage />

    <div className={styles["my-wrote-filter-main-container"]}>
      <MyPageFilter />
   
        <div className={styles["my-wrote-main-title-container"]}>
        {/* {communityInquiryFrequent.map((el) => {
      return <CommunityInquiryBox key={el.id} title={el.title} nickname={el.nickname} content={el.content} />;
    })} */}
  
        {myPageWrote.map((el) => {
          return <MypageWroteMain key={el.id} title={el.title} division={el.division} date={el.date} />;
        })}
      </div>
    </div>
    <ScrollToTop />
  </div>
);
export default MyWrote;
