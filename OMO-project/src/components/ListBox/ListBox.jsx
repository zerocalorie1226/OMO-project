import styles from "./ListBox.module.css";
import Like from "../../assets/detail/empty-thumb.png"
import Jjim from "../../assets/detail/empty-heart.png"


export const ListBox = (props) => (
  <>
    <a href="#" className={styles["list-box-container"]}>
    <div className={styles["list-box-inner-container"]}>
    <span className={styles["list-box-title"]}>{props.title}</span>
    <div className={styles["list-box-like"]}> <img src={Like} alt="좋아요"/> <span className={styles["list-box-like-number"]}> {props.like}</span></div>
    <div className={styles["list-box-jjim"]}> <img src={Jjim} alt="찜"/> <span className={styles["list-box-jjim-number"]}> {props.jjim}</span></div>
    <span className={styles["list-box-runtime"]}>{props.runTime}</span>
    <span className={styles["list-box-intro"]}>{props.intro}</span>
    <span className={styles["list-box-address-brief"]}>{props.addressBrief}</span>
    <img className={styles["list-box-img1"]} src={props.img1} />
    <img className={styles["list-box-img2"]} src={props.img2} />
    </div>
    </a>
  </>
);
