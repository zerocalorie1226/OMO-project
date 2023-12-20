import styles from "./MyCourseItemListBox.module.css";
import Like from "../../../assets/detail/purple-thumb.png";
import Jjim from "../../../assets/detail/red-heart.png";

export const MyCourseItemListBox = ({state, setState, el, onClick}) => {
  return (
    <>
      <div
        className={styles["mycourse-list-box-inner-container"]}
        onClick={() => {
          // console.log(state);
          setState(!state);
          onClick(el.id, el.title);
          console.log("개별박스 id:", el.id);
        }}
      >
        <span className={styles["mycourse-list-box-title"]}>{el.title}</span>

        <div className={styles["mycourse-list-box-like-jjim-container"]}>
          <div className={styles["mycourse-list-box-jjim"]}>
            <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "0px"}} /> <span className={styles["mycourse-list-box-jjim-number"]}> {el.jjim}</span>
          </div>
          <div className={styles["mycourse-list-box-like"]}>
            <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "-1px"}}  /> <span className={styles["mycourse-list-box-like-number"]}> {el.like}</span>
          </div>
        </div>

        <span className={`${styles["mycourse-list-box-runtime"]} ${el.runTime === "영업 준비 중" ? styles["ready"] : ""} `}> {el.runTime}</span>
        <span className={styles["mycourse-list-box-address-brief"]}>{el.addressBrief}</span>
        <img className={styles["mycourse-list-box-img1"]} src={el.src1} />
        <img className={styles["mycourse-list-box-img2"]} src={el.src2} />
        <img className={styles["mycourse-list-box-img3"]} src={el.src3} />
      </div>
    </>
  );
};
