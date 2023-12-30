import styles from "./MypageWroteMain.module.css";
import {communityFreePost} from "../../const/communityFreePost";
import {communityWorryPost} from "../../const/communityWorryPost";
import {communityQnAPost} from "../../const/communityQnAPost";
import {MyWrotePost} from "./../MyWrotePost/MyWrotePost";

const MypageWroteMain = ({postList}) => {

  console.log("postList: ",postList);
  return(
  <>
    <div className={styles["my-page-wrote-main-total-container"]}>
      {postList.map((el) => {
        return <MyWrotePost key={el.id} {...el} />;
      })}
    </div>
  </>
);
    }
export default MypageWroteMain;
