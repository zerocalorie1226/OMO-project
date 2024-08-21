import styles from "./WriteQnABoard.module.css";
import {useRef, useState} from "react";

const WriteQnABoard = ({onCreate, openModal, setOpenModal}) => {
  const titleInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // 공백 제거된 상태로 유효성 검사
    const trimmedTitle = state.title.trim();
    const trimmedContent = state.content.trim();
  
    if (trimmedTitle.length < 3) {
      alert("글제목은 최소 3자 이상 입력해주세요");
      return;
    }
  
    if (trimmedContent.length < 5) {
      alert("본문은 최소 5자 이상 입력해주세요");
      return;
    }
  
    onCreate(trimmedTitle, trimmedContent);
    alert("등록되었습니다");
    setState({
      title: "",
      content: "",
    });
    setOpenModal(false);
  };

  return (
    <div className={styles["Overlay"]}>
      <div className={styles["writeboard-total-container"]}>
        <div className={styles["writeboard-title"]}>문의 게시판에 글쓰기</div>
        <div className={styles["writeboard-categories-title-container"]}>
          {/* <select name="board" id="board-select" className={styles["board-select-box"]}>
            <option value="게시판 선택">게시판 선택</option>
            <option value="나만의 코스 게시판">나만의 코스 게시판</option>
            <option value="고민 게시판">고민 게시판</option>
            <option value="자유 게시판">자유 게시판</option>
            <option value="문의 게시판">문의 게시판</option>
          </select> */}
          <input
            ref={titleInput}
            name="title"
            type="text"
            className={styles["board-title"]}
            placeholder="글 제목 (최소 3글자, 최대 18자)"
            minLength="3"
            maxLength="16"
            value={state.title || ""}
            onChange={handleChangeState}
          />
        </div>
        <div className={styles["board-content-container"]}>
          <textarea
            ref={contentInput}
            name="content"
            className={styles["board-content"]}
            placeholder="게시글의 내용을 적어주세요. (최소 5자, 최대 500자)"
            minLength="5"
            maxLength="500"
            value={state.content}
            onChange={handleChangeState}
          />
        </div>
        <div className={styles["board-button-container"]}>
          <button
            type="button"
            className={styles["board-button-cancel"]}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            취소
          </button>
          {!openModal ? setOpenModal(true) : null}
          <button
            type="button"
            className={styles["board-button-submit"]}
            onClick={() => {
              handleSubmit();
            }}
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteQnABoard;
