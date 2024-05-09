import styles from "../Recommend/Recommend.module.css";
import Mypage from "../../../components/Mypage/Mypage";
import {MypageListBox} from "../../../components/MypageListBox/MypageListBox";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import RecommendIcon from "../../../assets/my-page/my-info/empty-thumb.png";

const Recommend = ({likeData}) => (
  <>
    <div className={styles["mypage-list-component-container"]}>
      <h2 className={styles["mypage-list-title-container"]}>
        <div>
          <img src={RecommendIcon} alt="추천한 장소 아이콘" /> <span>추천한 장소</span>
        </div>
      </h2>

      <section className={styles["mypage-list-container"]}>
        <Mypage />
        <div className={styles["mypage-list-box-container"]}>
          {likeData.length === 0 ? (
            <div className={styles["no-like-list"]}>추천한 장소가 없습니다. 장소 상세 페이지에서 추천 아이콘을 눌러보세요!</div>
          ) : (
            <div>
              {likeData.map((el) => {
                return <MypageListBox key={el.id} {...el} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
    <ScrollToTop />
  </>
);

export default Recommend;
