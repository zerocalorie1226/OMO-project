import {useRef, useState} from "react";
import styles from "./InquiryBoardQnA.module.css";
import CommunityInquiryFilter from "../../../components/CommunityInquiryFilter/CommunityInquiryFilter";
import {CommunityQnAPostList} from "../../../components/CommunityQnAPostList/CommunityQnAPostList";
import {CommunityCategory} from "../../../components/CommunityCategory/CommunityCategory";
import ListSearch from "../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import WritingButtonImg from "../../../assets/writing-button.png";
import WriteQnABoard from "../../../components/WritePost/WriteQnABoard/WriteQnABoard";


const InquiryBoardQnA = () => {
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

  
  return(
  
  <div>
    <CommunityCategory />
    <div className={styles["inquiry-board-qna-filter-search-container"]}>
      <CommunityInquiryFilter />
      <ListSearch />
    </div>
    <hr className={styles["inquiry-board-qna-hr"]} />
    <CommunityQnAPostList communityQnAPostList={data} />
    <ScrollToTop />
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
        {openModal ? <WriteQnABoard onCreate={onCreate} openModal={openModal} setOpenModal={setOpenModal} /> : null}
      </div>
  </div>
);
  };

export default InquiryBoardQnA;
