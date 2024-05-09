import styles from "../Recent/Recent.module.css";
import Mypage from "../../../components/Mypage/Mypage";
import {MypageListBox} from "../../../components/MypageListBox/MypageListBox";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {data} from "./../../../const/data";
import RecentIcon from "../../../assets/my-page/my-info/recent-place.png";

const Recent = ({recentData}) => {
  return (
    <>
      <div className={styles["mypage-list-component-container"]}>
        <h2 className={styles["mypage-list-title-container"]}>
          <div>
            <img src={RecentIcon} alt="최근 본 장소 아이콘" /> <span>최근 본 장소</span>
          </div>
        </h2>

        <section className={styles["mypage-list-container"]}>
          <Mypage />
          <div className={styles["mypage-list-box-container"]}>
            {recentData.length === 0 ? (
              <div className={styles["no-recent-list"]}>최근 본 장소가 없습니다.</div>
            ) : (
              <div>
                {recentData.map((item) => (
                  <MypageListBox key={item.id} {...item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Recent;
