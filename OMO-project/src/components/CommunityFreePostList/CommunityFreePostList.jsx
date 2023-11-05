import styles from "./CommunityFreePostList.module.css";
import {communityFreePost} from "../../const/communityFreePost"; //자유게시판 데이터
import { CommunityPostItem } from "../CommunityPostItem/CommunityPostItem";

export const CommunityFreePostList = ({communityPostList}) => {
  return(
<>
<section className={styles["community-free-container"]}>
        {communityPostList.map((el) => {
          return (
            <CommunityPostItem
              key={el.id}
              {...el}
            />
          );
        })}
      </section>
</>
  );
}