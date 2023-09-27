import styles from "./CommunityPost.module.css";
import Report from "../../assets/community/worry-board/report.png";
import Like from "../../assets/detail/empty-thumb.png";
import Comment from "../../assets/community/worry-board/comment.png";
import Submit from "../../assets/submit.png";
import SubmitHover from "../../assets/submit-hover.png";
import React, {useRef, useState} from "react";
import { elapsedText } from './../../utils/Time/elapsedText';

export const CommunityPost = (props) => {
  const [showComments, setShowComments] = useState(false); // 초기에 숨김 상태

  const [data, setData] = useState([]); // 댓글 리스트 초기 상태

  const [content, setContent] = useState(""); // 댓글 내용


  const dataId = useRef(0); // 댓글 아이디

  // 댓글 달기 버튼 클릭 시 댓글창 표시/숨김 토글
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  // 댓글 최소 글자
  const handleSubmit = () => {
    if (content.length < 1) {
      alert("최소 1글자 이상 입력해주세요");
      return;
    }
    onCreate(content);
  };

  // 댓글 리스트에 댓글 추가
  const onCreate = (content) => {
    const created_date = new Date().getTime();
    const newItem = {
      content,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  return (
    <>
      {/* 전체 영역 */}
      <div className={styles["community-post-container"]}>
        {/*버튼 전까지 윗부분 영역*/}
        <div className={styles["community-post-content-container"]}>
          <div className={styles["community-post-content-title-date"]}>
            {/* 제목 */}
            <span className={styles["community-post-title"]}>{props.title}</span>

            {/* 날짜 */}
            <span className={styles["community-post-date"]}>{props.reg_at}</span>
          </div>

          {/* 프로필 이미지+닉네임 */}
          <div className={styles["community-post-profile"]}>
            <img className={styles["community-post-profile-img"]} src={props.src} alt="프로필 이미지" style={{width: "32px", height: "32px"}} />
            <span className={styles["community-post-profile-nick"]}>{props.nick}</span>
          </div>

          {/* 글 내용 */}
          <span className={styles["community-post-content"]}>{props.content}</span>

          {/*공감수*/}
          <div className={styles["community-post-number-report-wapper"]}>
            <span className={styles["community-post-like-number"]}>좋아요 {props.like}</span>
            <span className={styles["community-post-view-number"]}>• 조회수 {props.view}</span>
            <span className={styles["community-post-comment-number"]}>• 댓글 {props.comment}</span>

            {/* 신고 아이콘 */}
            <button className={styles["community-post-report-button"]} type="button">
              <img className={styles["community-post-report"]} alt="신고 아이콘" src={Report} style={{width: "32px", height: "32px"}} />
            </button>
          </div>
        </div>

        <div className={styles["community-post-button-wrapper"]}>
          {/*좋아요 버튼*/}
          <button type="button" className={styles["community-post-like-button"]}>
            <img className={styles["community-post-like-button-img"]} src={Like} />
            좋아요
          </button>

          {/* 댓글달기 버튼 */}
          <button
            type="button"
            className={styles["community-post-comment-button"]}
            onClick={toggleComments} // 댓글 달기 버튼 클릭 시 toggleComments 함수 호출
          >
            <img className={styles["community-post-comment-button-img"]} src={Comment} />
            댓글 달기
          </button>

          {/* 하단 댓글창 전체박스 */}
          <div className={`${styles["community-post-comment-container"]} ${showComments ? styles["show-comments"] : ""}`}>
            {/* 댓글 입력창 */}
            <div className={styles["community-post-comment-input-container"]}>
              <img className={styles["community-post-comment-input-profile-img"]} src={props.src} alt="프로필 이미지" style={{width: "50px", height: "50px"}} />
              <input
                className={styles["community-post-comment-input"]}
                type="text"
                id="comment"
                name="comment"
                minLength="2"
                maxLength="40"
                size="10"
                placeholder="댓글을 입력하세요..."
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></input>
              <button className={styles["community-post-comment-input-button"]} type="submit" onClick={handleSubmit}>
                <img className={styles["community-post-comment-input-button-img"]} src={Submit} alt="제출 이미지" style={{width: "35px", height: "35px", marginTop: "6px"}} />
                <img className={styles["community-post-comment-input-button-img-hover"]} src={SubmitHover} alt="제출 hover 이미지" style={{width: "35px", height: "35px"}} />
              </button>
            </div>

            {/* 댓글 리스트 내용 */}
            {data.map((el) => (
              <div key={el.id}>
              <ul className={styles["community-post-comment"]}>
                <li>
                  {/* <img className={styles["community-post-comment-profile-img"]} src={el.src} alt="프로필 이미지" style={{width: "50px", height: "50px"}} /> */}
                  <div className={styles["community-post-comment-box"]}>
                    <div className={styles["community-post-comment-nick-date"]}>
                      <span className={styles["community-post-comment-box-nick"]}>이니</span>
                      <span className={styles["community-post-comment-box-date"]}>{elapsedText(new Date(el.created_date)).toLocaleString()}</span>
                    </div>
                    <span className={styles["community-post-comment-box-content"]}>{el.content}</span>
                  </div>
                </li>
              </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
