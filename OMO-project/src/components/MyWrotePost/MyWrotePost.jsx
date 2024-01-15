import styles from "./MyWrotePost.module.css";
// import Report from "../../assets/community/worry-board/report.png";
// import Like from "../../assets/detail/empty-thumb.png";
// import Comment from "../../assets/community/worry-board/comment.png";
// import Submit from "../../assets/submit.png";
// import ProfileImg from "../../assets/profile-img.jpg";
// import SubmitHover from "../../assets/submit-hover.png";
import React, {useState} from "react";

export const MyWrotePost = (props) => {
  console.log("props: ", props);

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  const containerClassName = expanded ? styles["my-wrote-post-container-expanded"] : styles["my-wrote-post-container"];

  const getCategoryDisplayName = () => {
    switch (props.category) {
      case "free":
        return "자유게시판";
      case "worry":
        return "고민게시판";
      case "qna":
        return "문의게시판";
      default:
        return props.category;
    }
  };

  return (
    <>
      {/* 전체 영역 */}
      <div className={containerClassName} onClick={handleClick}>
        {/*버튼 전까지 윗부분 영역*/}
        <div className={styles["my-wrote-post-content-container"]}>
          <div className={styles["my-wrote-post-content-title-date"]}>
            {/* 제목 */}
            <span className={styles["my-wrote-post-title"]}>{props.title}</span>

            <div className={styles["my-wrote-post-category-date"]}>
              {/* 카테고리 */}
              <span className={styles["my-wrote-post-category"]}>{getCategoryDisplayName()}</span>
              {/* 날짜 */}
              <span className={styles["my-wrote-post-date"]}>{new Date(props.reg_at).toLocaleString()}</span>
            </div>
          </div>

          {/* 프로필 이미지+닉네임 */}
          {/* <div className={styles["my-wrote-post-profile"]}>
            <img className={styles["my-wrote-post-profile-img"]} src={ProfileImg} alt="프로필 이미지" style={{width: "32px", height: "32px"}} />
            <span className={styles["my-wrote-post-profile-nick"]}>이니</span>
          </div> */}

          {/* 글 내용 */}
          <span className={styles["my-wrote-post-content"]}>{props.content}</span>
        </div>

        {/* <div className={styles["my-wrote-post-button-wrapper"]}> */}
        {/* 댓글달기 버튼 */}
        {/* <button type="button" className={styles["my-wrote-post-comment-button"]}>
            <img className={styles["my-wrote-post-comment-button-img"]} src={Comment} style={{width: "25px", height: "25px"}} />
            댓글
          </button>
        </div> */}

        {/* 하단 댓글창 전체박스 */}
        <div className={styles["my-wrote-post-comment-container"]}>
          {/* 댓글 내용 */}
          {/* {props.comment_list.map((el) => (
            <ul className={styles["my-wrote-post-comment"]}>
              <li>
                <img className={styles["my-wrote-post-comment-profile-img"]} src={el.src} alt="프로필 이미지" style={{width: "50px", height: "50px"}} />
                <div className={styles["my-wrote-post-comment-box"]}>
                  <div className={styles["my-wrote-post-comment-nick-date"]}>
                    <span className={styles["my-wrote-post-comment-box-nick"]}>{el.nick}</span>
                    <span className={styles["my-wrote-post-comment-box-date"]}>{el.reg_at}</span>
                  </div>
                  <span className={styles["my-wrote-post-comment-box-content"]}>{el.content}</span>
                </div>
              </li>
            </ul>
          ))} */}
        </div>
      </div>
    </>
  );
};
