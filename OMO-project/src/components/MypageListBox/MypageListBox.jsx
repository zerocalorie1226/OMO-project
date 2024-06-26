import styles from "./MypageListBox.module.css";
import Like from "../../assets/detail/purple-thumb.png";
import EmptyLike from "../../assets/detail/empty-thumb.png";
import Jjim from "../../assets/detail/red-heart.png";
import EmptyJjim from "../../assets/detail/empty-heart.png";
import {useNavigate} from "react-router-dom";

export const MypageListBox = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles["mypage-list-box-inner-container"]}
        onClick={() => {
          navigate(`/DetailMenu/${props.id}/${props.place_name}`);
        }}
      >
        <span className={styles["mypage-list-box-title"]}>{props.place_name}</span>

        <div className={styles["mypage-list-box-like-jjim-container"]}>
          <div className={styles["mypage-list-box-jjim"]}>
            <img src={props.myMine ? Jjim : EmptyJjim} alt="찜 아이콘" /> 
            <span className={styles["mypage-list-box-jjim-number"]}> {props.mine}</span>
          </div>
          <div className={styles["mypage-list-box-like"]}>
            <img src={props.myRecommend ? Like : EmptyLike} alt="좋아요 아이콘" /> 
            <span className={styles["mypage-list-box-like-number"]}> {props.recommend}</span>
          </div>
        </div>

        <span className={styles["mypage-list-box-address-brief"]}>{props.address_name}</span>
        <span className={`${styles["mypage-list-box-phone"]} ${!props.phone ? styles["not_provided"] : ""}`}>{props.phone ? props.phone : "전화번호 미제공"}</span>
        <img className={styles["mypage-list-box-img1"]} src={props.src1} />
        <img className={styles["mypage-list-box-img2"]} src={props.src2} />
        <img className={styles["mypage-list-box-img3"]} src={props.src3} />
      </div>
    </>
  );
};
