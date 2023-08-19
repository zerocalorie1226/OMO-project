import styles from "./CommunityPost.module.css";
import Report from "../../../assets/community/worry-board/report.jpg"
import Like from "../../../assets/detail/empty-thumb.png";
import Comment from "../../../assets/detail/review.png";

export const CommunityPost = (props) => (
  <>
    {/* 전체 영역 */}
    <div className={styles["community-post-container"]}>
        
        {/* 제목 */}
        <span className={styles["community-post-title"]}>{props.title}</span>

        {/* 날짜 */}
        <span className={styles["community-post-date"]}>{props.reg_at}</span>
        
        {/* 프로필 이미지+닉네임 */}
        <div className={styles["community-post-profile"]}>
        <img className={styles["community-post-profile-img"]} src={props.src}  alt="프로필 이미지" style={{width: "32px", height: "32px"}}  />
        <span className={styles["community-post-profile-nick"]}>{props.nick}</span>
        </div>

        {/* 글 내용 */}
        <span className={styles["community-post-content"]}>{props.content}</span>

          {/*공감수*/}
        <span className={styles["community-post-like-number"]}>좋아요 {props.like}</span>
        <span className={styles["community-post-view-number"]}>• 조회수 {props.view}</span>
        <span className={styles["community-post-comment-number"]}>• 댓글 {props.comment}</span>

        {/* 신고 아이콘 */}
        <img className={styles["community-post-report"]} src={Report} />

        {/*좋아요 버튼*/}
        <button type="button" className={styles["community-post-like-button"]}> 
        <img className={styles["community-post-like-button-img"]} src={Like} /> 
        <span className={styles["community-post-like-button-text"]}>좋아요</span>
        </button>

        {/* 댓글달기 버튼 */}
        <button type="button" className={styles["community-post-comment-button"]}>
        <img className={styles["community-post-comment-button-img"]} src={Comment} /> 
        <span className={styles["community-post-comment-button-text"]}>댓글 달기</span>
        </button>


{/* 하단 댓글창 전체박스 */}
      <div className={styles["community-post-comment-container"]}>


{/* 댓글 입력창 */}
<div className={styles["community-post-comment-input-container"]}>
       <div className={styles["community-post-comment-input-profile-img"]}> <img src={props.src} alt="프로필 이미지" style={{width: "32px", height: "32px"}} /></div>
       <input className={styles["community-post-comment-input"]}type="text" id="comment" name="comment" minlength="2" maxlength="20" size="10" placeholder="댓글을 입력하세요..."></input>
</div>

{/* 댓글 내용 */}
{props.comment_list.map((el) => (
            <ul>
              <li className={styles["community-post-comment-list"]}>
              <div className={styles["community-post-comment-profile-img"]}> <img src={el.src} alt="프로필 이미지" style={{width: "32px", height: "32px"}} /></div>
              <div className={styles["community-post-comment-box"]}> 
              <span className={styles["community-post-comment-box-nick"]}>{el.nick}</span>
              <span className={styles["community-post-comment-box-date"]}>{el.reg_at}</span>
              <span className={styles["community-post-comment-box-content"]}>{el.content}</span>
              </div>
              </li>
            </ul>
          ))}


</div>

     </div>
  </>
);
