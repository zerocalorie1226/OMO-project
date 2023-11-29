import styles from "./MyCourseItemListBox.module.css";
import Like from "../../../assets/my-page/interest/empty-thumb.png";
import Jjim from "../../../assets/my-page/interest/empty-heart.png";
import {Link} from "react-router-dom";
import {useState} from "react";

export const MyCourseItemListBox = ({state, setState, el}) => {
  return (
    <>
      <div
        className={styles["mycourse-list-box-inner-container"]}
        onClick={() => {
          console.log(state);
          setState(!state);
        }}
      >
        <span className={styles["mycourse-list-box-title"]}>{el.title}</span>

        <div className={styles["mycourse-list-box-like-jjim-container"]}>
          <div className={styles["mycourse-list-box-jjim"]}>
            <img src={Jjim} alt="찜 아이콘" /> <span className={styles["mycourse-list-box-jjim-number"]}> {el.jjim}</span>
          </div>
          <div className={styles["mycourse-list-box-like"]}>
            <img src={Like} alt="좋아요 아이콘" /> <span className={styles["mycourse-list-box-like-number"]}> {el.like}</span>
          </div>
        </div>

        <span className={styles["mycourse-list-box-runtime"]}>{el.runTime}</span>
        <span className={styles["mycourse-list-box-address-brief"]}>{el.addressBrief}</span>
        <img className={styles["mycourse-list-box-img1"]} src={el.src1} />
        <img className={styles["mycourse-list-box-img2"]} src={el.src2} />
      </div>
    </>
  );
};
