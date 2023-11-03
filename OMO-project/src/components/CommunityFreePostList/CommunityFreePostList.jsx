import styles from "./CommunityFreePostList.module.css";
import {communityFreePost} from "../../const/communityFreePost"; //자유게시판 데이터
import { CommunityPostItem } from "../CommunityPostItem/CommunityPostItem";

export const CommunityFreePostList = () => {

  return(
<>
<section className={styles["community-free-container"]}>
        {communityFreePost.map((el) => {
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