import styles from "./CommunityPost.module.css";
import Report from "../../../assets/community/worry-board/report.jpg"


export const CommunityPost = (props) => (
  <>
    {/* 전체 영역 */}
    <div className={styles["community-post-container"]}>
        
        {/* 제목 */}
        <span className={styles["community-post-title"]}>{props}</span>

        {/* 날짜 */}
        <span className={styles["community-post-date"]}>{props}</span>
        
        {/* 프로필 이미지+닉네임 */}
        <div className={styles["community-post-profile"]}>
        <img className={styles["community-post-profile-img"]} src={props}  alt="프로필 이미지" style={{width: "32px", height: "32px"}}  />
        <span className={styles["community-post-profile-nick"]}>{props}</span>
        </div>

        {/* 글 내용 */}
        <span className={styles["community-post-content"]}>{props}</span>

          {/*공감수*/}
        <span className={styles["community-post-like-number"]}>좋아요 {props}</span>
        <span className={styles["community-post-view-number"]}>• 조회수 {props}</span>
        <span className={styles["community-post-comment-number"]}>• 댓글 {props}</span>

        {/* 신고 아이콘 */}
        <img className={styles["community-post-report"]} src={Report} />

        {/*좋아요 버튼*/}
        <button type="button" className={styles["community-post-like-button"]}> 
        <img className={styles["community-post-like-button-img"]} src={props} /> 
        <span className={styles["community-post-like-button-text"]} src={props} />
        </button>

        {/* 댓글달기 버튼 */}
        <button type="button" className={styles["community-post-comment-button"]}>
        <img className={styles["community-post-comment-button-img"]} src={props} /> 
        <span className={styles["community-post-comment-button-text"]} src={props} />
        </button>


{/* 하단 댓글창 전체박스 */}
      <div className={styles["community-post-comment-container"]}>


{/* 댓글 입력창 */}
<div className={styles["community-post-comment-input-container"]}>
       <div className={styles["community-post-comment-input-profile-img"]}> <img src={ProfileImg} alt="프로필 이미지" style={{width: "32px", height: "32px"}} /></div>
       <input className={styles["community-post-comment-input"]}type="text" id="comment" name="comment" minlength="2" maxlength="20" size="10" placeholder="댓글을 입력하세요..."></input>
</div>

{/* 댓글 내용 */}
<div className={styles["community-post-comment-profile-img"]}> <img src={ProfileImg} alt="프로필 이미지" style={{width: "32px", height: "32px"}} /></div>
       <div className={styles["community-post-comment-box"]}> 
              <span className={styles["community-post-comment-box-nick"]}>{data}</span>
              <span className={styles["community-post-comment-box-date"]}>{data}</span>
              <span className={styles["community-post-comment-box-content"]}>{data}</span>
      </div>
</div>

     </div>
  </>
);
