import styles from "./MyCourseItemListBox.module.css";
import Like from "../../../assets/detail/purple-thumb.png";
import EmptyLike from "../../../assets/detail/empty-thumb.png";
import Jjim from "../../../assets/detail/red-heart.png";
import EmptyJjim from "../../../assets/detail/empty-heart.png";

export const MyCourseItemListBox = ({state, setState, el, onClick, changeSetContent}) => {
  return (
    <>
      <div
        className={styles["mycourse-list-box-inner-container"]}
        onClick={() => {
          // console.log(state);
          setState(!state);
          onClick(el.id, el.title);
          // console.log("MyCourseItemListBox에서 개별박스 el:", el);
          // changeSetContent(el);
          changeSetContent([el /* 다른 el 추가 */]);
        }}
      >
        <span className={styles["mycourse-list-box-title"]}>{el.place_name}</span>

        <div className={styles["mycourse-list-box-like-jjim-container"]}>
          <div className={styles["mycourse-list-box-jjim"]}>
            <img src={el.myMine ? Jjim : EmptyJjim} alt="찜 아이콘" style={{position: "absolute", top: "0px"}} /> <span className={styles["mycourse-list-box-jjim-number"]}> {el.mine}</span>
          </div>
          <div className={styles["mycourse-list-box-like"]}>
            <img src={el.myRecommend ? Like : EmptyLike}  alt="좋아요 아이콘" style={{position: "absolute", top: "-1px"}} /> <span className={styles["mycourse-list-box-like-number"]}> {el.recommend}</span>
          </div>
        </div>

        <span className={`${styles["mycourse-list-box-phone"]} ${!el.phone ? styles["not_provided"] : ""}`}>{el.phone ? el.phone : "전화번호 미제공"}</span>
        <span className={styles["mycourse-list-box-address-brief"]}>{el.address_name}</span>
        <img className={styles["mycourse-list-box-img1"]} src={el.src1} />
        <img className={styles["mycourse-list-box-img2"]} src={el.src2} />
        <img className={styles["mycourse-list-box-img3"]} src={el.src3} />
      </div>
    </>
  );
};
