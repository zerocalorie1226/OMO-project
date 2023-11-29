import styles from "./MyCourseFindRecentModal.module.css";
import {MyCourseItemListBox} from "../MyCourseItemListBox/MyCourseItemListBox";
import {data} from "./../../../const/data";
import ModalClose from "./../../../assets/modal-close.png";

const MyCourseFindRecentModal = ({recentModal, setRecentModal}) => (
  <>
    <div className={styles["Overlay"]}>
      <div className={styles["mycourse-find-recent-modal-container"]}>
        <label className={styles["mycourse-find-recent-modal-title"]} htmlFor="find-recent">
          최근 본 목록에서 찾기
          <button
            className={styles["mycourse-find-recent-close-btn"]}
            type="button"
            onClick={() => {
              setRecentModal(false);
            }}
          >
            <img className={styles["mycourse-find-recent-close-btn-img"]} src={ModalClose} alt="닫기 아이콘" />
            {!recentModal ? setRecentModal(true) : null}
          </button>
        </label>
        <div className={styles["mycourse-find-recent-modal-list-box-container"]}>
          {data.map((el) => {
            return <MypageListBox key={el.id} {...el} />;
          })}
        </div>
      </div>
    </div>
  </>
);

export default MyCourseFindRecentModal;
