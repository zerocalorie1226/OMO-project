import styles from "./MypageListBox.module.css";
import Like from "../../assets/detail/purple-thumb.png";
import Jjim from "../../assets/detail/red-heart.png";
import {useNavigate} from "react-router-dom";

export const MypageListBox = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles["mypage-list-box-inner-container"]}
        onClick={() => {
          navigate(`/DetailMenu/${props.id}`);
        }}
      >
        <span className={styles["mypage-list-box-title"]}>{props.title}</span>

        <div className={styles["mypage-list-box-like-jjim-container"]}>
          <div className={styles["mypage-list-box-jjim"]}>
            <img src={Jjim} alt="찜 아이콘" /> <span className={styles["mypage-list-box-jjim-number"]}> {props.jjim}</span>
          </div>
          <div className={styles["mypage-list-box-like"]}>
            <img src={Like} alt="좋아요 아이콘" /> <span className={styles["mypage-list-box-like-number"]}> {props.like}</span>
          </div>
        </div>

        <span className={styles["mypage-list-box-address-brief"]}>{props.addressBrief}</span>
        <span className={`${styles["mypage-list-box-runtime"]} ${props.runTime === "영업 준비 중" ? styles["ready"] : ""} `}> {props.runTime}</span>
        <img className={styles["mypage-list-box-img1"]} src={props.src1} />
        <img className={styles["mypage-list-box-img2"]} src={props.src2} />
        <img className={styles["mypage-list-box-img3"]} src={props.src3} />
      </div>
    </>
  );
};
