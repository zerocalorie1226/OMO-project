import styles from "./MyCourseFindSearchModal.module.css";
import {MypageListBox} from "./../../MypageListBox/MypageListBox";
import {data} from "./../../../const/data";
import Magnifier from "./../../../assets/magnifier.png";
import ModalClose from "./../../../assets/modal-close.png";



const MyCourseFindSearchModal = () => (
  <>
    <div className={styles["Overlay"]}>
      <div className={styles["mycourse-find-search-modal-container"]}>
        <label className={styles["mycourse-find-search-modal-title"]} htmlFor="find-search">
        <div className={styles["mycourse-find-search-container"]}>
    <div className={styles["mycourse-find-search-img-container"]}>
      <a href="#">
        <img src={Magnifier} alt="돋보기" />
      </a>
    </div>
    <button className={styles["mycourse-find-search-close-btn"]} type="button">
      <img className={styles["mycourse-find-search-close-btn-img"]} src={ModalClose} alt="닫기 아이콘" />
    </button>
    <input className={styles["mycourse-find-search-input-container"]} placeholder="검색어를 입력해주세요" maxLength={20} />
  </div>
        </label>
        <div className={styles["mycourse-find-search-modal-list-box-container"]}>
          {data.map((el) => {
            return <MypageListBox key={el.id} title={el.title} like={el.like} jjim={el.jjim} runTime={el.runTime} intro={el.intro} addressBrief={el.addressBrief} img1={el.src1} img2={el.src2} />;
          })}
        </div>
      </div>
    </div>
  </>
);

export default MyCourseFindSearchModal;
