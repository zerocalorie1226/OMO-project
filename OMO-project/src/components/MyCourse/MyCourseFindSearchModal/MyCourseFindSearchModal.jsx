import styles from "./MyCourseFindSearchModal.module.css";
import {MyCourseItemListBox} from "../MyCourseItemListBox/MyCourseItemListBox";
import {data} from "./../../../const/data";
import Magnifier from "./../../../assets/magnifier.png";
import ModalClose from "./../../../assets/modal-close.png";

const MyCourseFindSearchModal = ({searchModal, setSearchModal}) => (
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
            <button
              className={styles["mycourse-find-search-close-btn"]}
              type="button"
              onClick={() => {
                setSearchModal(false);
              }}
            >
              <img className={styles["mycourse-find-search-close-btn-img"]} src={ModalClose} alt="닫기 아이콘" />
              {!searchModal ? setSearchModal(true) : null}
            </button>
            <input className={styles["mycourse-find-search-input-container"]} placeholder="검색어를 입력해 주세요." maxLength={20} />
          </div>
        </label>
        <div className={styles["mycourse-find-search-modal-list-box-container"]}>
          {data.map((el) => {
            return <MyCourseItemListBox key={el.id} {...el} />;
          })}
        </div>
      </div>
    </div>
  </>
);

export default MyCourseFindSearchModal;
