import styles from "./MyCourseFindInterestModal.module.css";
import {MyCourseItemListBox} from "../MyCourseItemListBox/MyCourseItemListBox";
import {data} from "./../../../const/data";
import ModalClose from "./../../../assets/modal-close.png";

const MyCourseFindInterestModal = ({interestModal, setInterestModal}) => (
  <>
    <div className={styles["Overlay"]}>
      <div className={styles["mycourse-find-interest-modal-container"]}>
        <label className={styles["mycourse-find-interest-modal-title"]} htmlFor="find-interest">
          관심 목록에서 찾기
          <button
            className={styles["mycourse-find-interest-close-btn"]}
            type="button"
            onClick={() => {
              setInterestModal(false);
            }}
          >
            <img className={styles["mycourse-find-interest-close-btn-img"]} src={ModalClose} alt="닫기 아이콘" />
            {!interestModal ? setInterestModal(true) : null}
          </button>
        </label>
        <div className={styles["mycourse-find-interest-modal-list-box-container"]}>
          {data.map((el) => {
            return <MyCourseItemListBox key={el.id} {...el} />;
          })}
        </div>
      </div>
    </div>
  </>
);

export default MyCourseFindInterestModal;
