import styles from "./CommunityFreePostList.module.css";
import {CommunityPostItem} from "../CommunityPostItem/CommunityPostItem";

export const CommunityFreePostList = ({communityFreePostList}) => {
  return (
    <>
      <section className={styles["community-free-container"]}>
        {communityFreePostList.map((el) => {
          return <CommunityPostItem key={el.boardId} {...el} />;
        })}
      </section>
    </>
  );
};
