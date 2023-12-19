import styles from "./ListBox.module.css";
import Like from "../../assets/detail/empty-thumb.png";
import Jjim from "../../assets/detail/empty-heart.png";
import {useNavigate } from "react-router-dom";

export const ListBox = (props) => {
  const navigate = useNavigate();
  
  return (
    <>
      <button
        onClick={() => {
          navigate(`/DetailMenu/${props.id}`);
        
        }}
        className={styles["list-box-container"]}
      >
        <div className={styles["list-box-inner-container"]}>
          <span className={styles["list-box-title"]}>{props.title}</span>

          <div className={styles["list-box-like-jjim-container"]}>
            <div className={styles["list-box-jjim"]}>
              <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "0px", width: "23px", height: "23px"}} /> <span className={styles["list-box-jjim-number"]}> {props.jjim}</span>
            </div>
            <div className={styles["list-box-like"]}>
              <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "-1px", width: "24px", height: "24px"}} />
              <span className={styles["list-box-like-number"]}> {props.like}</span>
            </div>
          </div>

          <span className={`${styles["list-box-runtime"]} ${props.runTime === "영업 준비 중" ? styles["ready"] : ""} `}> {props.runTime}</span>
          {/* <span className={styles["list-box-intro"]}>{props.intro}</span> */}
          <span className={styles["list-box-address-brief"]}>{props.addressBrief}</span>
          <img className={styles["list-box-img1"]} src={props.src1} />
          <img className={styles["list-box-img2"]} src={props.src2} />
        </div>
      </button>
    </>
  );
};
