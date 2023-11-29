import styles from "./MypageWroteMain.module.css";
import {communityFreePost} from "../../const/communityFreePost";
import {communityWorryPost} from "../../const/communityWorryPost";
import {communityQnAPost} from "../../const/communityQnAPost";
import { MyWrotePost } from './../MyWrotePost/MyWrotePost';

const MypageWroteMain = ({communityWorryPostList}) => (
  <>
  <div className={styles["my-page-wrote-main-total-container"]}>
    {communityWorryPostList.map((el) => {
          return <MyWrotePost key={el.id} {...el} />;
        })}

  </div>


  {/* <div className={styles["my-page-wrote-main-total-container"]}>
    {communityFreePostList.map((el) => {
          return <MyWrotePost key={el.id} {...el} />;
        })}
  </div> */}


  </>

);

export default MypageWroteMain;

