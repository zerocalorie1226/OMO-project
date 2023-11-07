import {useRef, useState} from "react";
import styles from "./WorryBoard.module.css";
import {communityPageFilter} from "./../../../const/communityPageFilter";
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory";
import Filter from "../../../components/Filter/Filter";
import ListSearch from "./../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {CommunityWorryPostList} from "../../../components/CommunityWorryPostList/CommunityWorryPostList";
import WritingButtonImg from "../../../assets/writing-button.png";
import WriteWorryBoard from "../../../components/WriteWorryBoard/WriteWorryBoard";

const WorryBoard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (title, content) => {
    const reg_at = new Date().getTime();
    const newItem = {
      title,
      content,
      reg_at,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <>
      {/* 카테고리 */}
      <CommunityCategory />

      {/* 필터 + 검색창 */}
      <div className={styles["community-component-container"]}>
        <div className={styles["community-filter-container"]}>
          {communityPageFilter.map((el) => {
            return <Filter key={el.id} {...el} />;
          })}
        </div>
        <ListSearch />
      </div>

      {/* 게시글 리스트 */}
      <CommunityWorryPostList communityWorryPostList={data} />

      {/* 스크롤 */}
      <ScrollToTop />

      {/* 글쓰기 */}
      <div className={styles["writing-btn-container"]}>
        <button
          type="button"
          className={styles["writing-btn"]}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img src={WritingButtonImg} alt="글쓰기 아이콘" style={{width: "80px", height: "80px"}} />{" "}
        </button>
        {openModal ? <WriteWorryBoard onCreate={onCreate} openModal={openModal} setOpenModal={setOpenModal} /> : null}
      </div>
    </>
  );
};

export default WorryBoard;
