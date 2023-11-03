import {useNavigate} from "react-router-dom";
import styles from "./WriteBoard.module.css";
import {useState} from "react";

const WriteBoard = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    // 묶어준다.
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
    if(state.title.length < 3){
      alert("글제목은 최소 3글자 이상 입력해주세요");
      return;
    } 

    if(state.content.length < 5){
      alert("일기 본문은 최소 5글자 이상 입력해주세요");
      return;
    } 
    alert("등록되었습니다");
    navigate(-1);
  }

  return (
    <div className={styles["writeboard-total-container"]}>
      <h2 className={styles["writeboard-title"]}>글쓰기</h2>
      <div className={styles["writeboard-categories-title-container"]}>
        <select name="board" id="board-select" className={styles["board-select-box"]}>
          <option value="게시판 선택">게시판 선택</option>
          <option value="나만의 코스 게시판">나만의 코스 게시판</option>
          <option value="고민 게시판">고민 게시판</option>
          <option value="자유 게시판">자유 게시판</option>
          <option value="문의 게시판">문의 게시판</option>
        </select>
        <input name="title" type="text" className={styles["board-title"]} placeholder="글 제목" value={state.title} onChange={handleChangeState} />
      </div>
      <div className={styles["board-content-container"]}>
        <textarea name="content" className={styles["board-content"]} placeholder="게시글의 내용을 적어주세요. (최대 400자)" value={state.content} onChange={handleChangeState} />
      </div>
      <div className={styles["board-button-container"]}>
        <button
          type="button"
          className={styles["board-button-cancel"]}
          onClick={() => {
            navigate(-1);
          }}
        >
          취소
        </button>
        <button
          type="button"
          className={styles["board-button-submit"]}
          onClick={() => {
            handleSubmit();
          }
        }
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default WriteBoard;
