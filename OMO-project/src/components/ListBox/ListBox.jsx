import React, {forwardRef} from "react";
import styles from "./ListBox.module.css";
import Like from "../../assets/detail/purple-thumb.png";
import Jjim from "../../assets/detail/red-heart.png";
import {useNavigate} from "react-router-dom";

const ListBox = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        ref={ref}
        onClick={() => {
          navigate(`/DetailMenu/${props.id}/${props.place_name}`);
          props.addRecentItem({
            id: props.id,
            place_name: props.place_name,
            address_name: props.address_name,
            road_address_name: props.road_address_name,
            phone: props.phone,
            mine: props.mine,
            recommend: props.recommend,
          });
        }}
        className={styles["list-box-container"]}
      >
        <div className={styles["list-box-inner-container"]}>
          <span className={styles["list-box-title"]}>{props.place_name}</span>

          <div className={styles["list-box-like-jjim-container"]}>
            <div className={styles["list-box-jjim"]}>
              <img src={Jjim} alt="찜 아이콘" style={{position: "absolute", top: "0px", width: "23px", height: "23px"}} />
              <span className={styles["list-box-jjim-number"]}> {props.mine}</span>
            </div>
            <div className={styles["list-box-like"]}>
              <img src={Like} alt="좋아요 아이콘" style={{position: "absolute", top: "-1px", width: "24px", height: "24px"}} />
              <span className={styles["list-box-like-number"]}> {props.recommend}</span>
            </div>
          </div>

          <span className={styles["list-box-address-brief"]}>{props.address_name}</span>
          <img className={styles["list-box-img1"]} src={props.defaultListImg} />
        </div>
      </button>
    </>
  );
});

// 디스플레이 이름 설정
ListBox.displayName = "ListBox";

export {ListBox};
