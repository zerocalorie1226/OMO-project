import styles from "./Interest.module.css";
import Mypage from "../../../components/Mypage/Mypage";
import {MypageListBox} from "../../../components/MypageListBox/MypageListBox";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {data} from "./../../../const/data";
import InterestIcon from "../../../assets/my-page/my-info/empty-heart.png";

const Interest = () => {

  return (
    <>
      <div className={styles["mypage-list-component-container"]}>
        <h2 className={styles["mypage-list-title-container"]}>
          <div>
            <img src={InterestIcon} alt="관심목록 아이콘" /> <span>관심목록</span>
          </div>
        </h2>

        <section className={styles["mypage-list-container"]}>
          <Mypage />
          <div className={styles["mypage-list-box-container"]}>
            {data.map((el) => {
              return <MypageListBox key={el.id} {...el} />;
            })}
          </div>
        </section>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Interest;
