import styles from "./CommunityWorryPostList.module.css";
import {communityWorryPost} from "../../const/communityWorryPost"; //고민게시판 데이터
import { CommunityPostItem } from "../CommunityPostItem/CommunityPostItem";

export const CommunityWorryPostList = () => {

  return(
    <>
    <section className={styles["community-worry-container"]}>
    {communityWorryPost.map((el) => {
      return (
        <CommunityPostItem
          {...el}
        />
      );
    })}
  </section>
</>
  );
}