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
          key={el.id}
          title={el.title}
          reg_at={el.reg_at}
          src={el.src}
          nick={el.nick}
          content={el.content}
          like={el.like}
          view={el.view}
          comment={el.comment}
          comment_list={el.comment_list}
        />
      );
    })}
  </section>
</>
  );
}