import {useRef, useState} from "react";
import styles from "./FreeBoard.module.css";
import {communityPageFilter} from "./../../../const/communityPageFilter"; //필터 데이터
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory"; //카테고리
import Filter from "../../../components/Filter/Filter"; //필터 컴포넌트
import ListSearch from "./../../../components/ListSearch/ListSearch"; //검생창
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop"; //스크롤버튼
import {WritingButton} from "../../../components/WritingButton/WritingButton"; //글쓰기버튼
import {Link} from "react-router-dom";
import {CommunityFreePostList} from "../../../components/CommunityFreePostList/CommunityFreePostList";
import WriteBoard from "../../../components/WriteBoard/WriteBoard";
import WritingButtonImg from "../../../assets/writing-button.png";

const FreeBoard = () => {
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

      <CommunityFreePostList communityPostList={data} />

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
        {openModal ? <WriteBoard onCreate={onCreate} openModal={openModal} setOpenModal={setOpenModal} /> : null}
      </div>
      
    </>
  );
};

export default FreeBoard;
