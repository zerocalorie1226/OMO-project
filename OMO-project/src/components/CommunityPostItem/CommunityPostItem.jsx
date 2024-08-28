import React, { useRef, useState, useMemo, useEffect } from "react";
import axios from "axios";
import styles from "./CommunityPostItem.module.css";
import Report from "../../assets/community/worry-board/report.png";
import Like from "../../assets/detail/empty-thumb.png";
import LikeClicked from "../../assets/detail/purple-thumb.png";
import DefaultProfileImage from "../../assets/profile-default.png"; // 기본 프로필 이미지
import Comment from "../../assets/community/worry-board/comment.png";
import Submit from "../../assets/submit.png";
import SubmitHover from "../../assets/submit-hover.png";
import { elapsedText } from "../../utils/Time/elapsedText";
import ReportModal from "../ReportModal/ReportModal";
import { formatDate } from "../../utils/Time/formatDate";

export const CommunityPostItem = (props) => {
  // 신고 모달창 열기
  const [openModal, setOpenModal] = useState(false);

  // 좋아요 버튼 (이미지, 클릭토글)
  const [imageSrcLike, setImageSrcLike] = useState(Like);
  const [isClickedLike, setIsClickedLike] = useState(false);

  // like 값을 사용하여 초기 상태 설정 (따봉 누른 것들 새로고침해도 유지하게끔)
  useEffect(() => {
    if (props.myLiked) {
      setImageSrcLike(LikeClicked);
      setIsClickedLike(true);
    } else {
      setImageSrcLike(Like);
      setIsClickedLike(false);
    }
  }, [props.myLiked]);

  // 댓글창 초기에 숨김상태
  const [showComments, setShowComments] = useState(false);

  // 댓글 내용
  const [content, setContent] = useState("");

  // 댓글 달기 버튼 클릭 시 댓글창 표시/숨김 토글
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  // 댓글 최소 글자
  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    if (content.length < 1) {
      alert("최소 1글자 이상 입력해주세요");
      return;
    }

    // 댓글 POST 통신
    try {
      const response = await axios.post(
        `https://api.oneulmohae.co.kr/comment/write`,
        { content, boardId: props.boardId },
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
          withCredentials: true,
        }
      );

      if (response.status === 200 || response.status === 201) {
        // 댓글 작성 후 GET 통신으로 데이터 업데이트
        const getResponse = await axios.get(
          `https://api.oneulmohae.co.kr/board/${props.category}?page=1&size=10&sorting=createdAt`,
          {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
          }
          
        );
        console.log(getResponse)
        if (getResponse.status === 200) {
          props.setPosts(getResponse.data.data);
        } else {
          console.error("게시글을 가져오는데 실패하였습니다.");
        }

        setContent("");
      } else {
        console.error("게시글을 가져오는데 실패하였습니다");
      }
    } catch (error) {
      console.error("게시글을 가져오는데 실패하였습니다:", error);
    }
  };

  // 좋아요 버튼
  const handleClickLike = async () => {
    try {
      const response = await axios.put(
        `https://api.oneulmohae.co.kr/board/like/${props.boardId}`,
        {}, // 빈 객체를 본문으로 전달
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const getResponse = await axios.get(
          `https://api.oneulmohae.co.kr/board/${props.category}?page=1&size=10&sorting=createdAt`,
          {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
          }
        );
        if (getResponse.status === 200) {
          const updatedData = getResponse.data;

          // 이미지 변경 및 카운트 업데이트
          if (isClickedLike) {
            setImageSrcLike(Like);
            setIsClickedLike(false);
          } else {
            setImageSrcLike(LikeClicked);
            setIsClickedLike(true);
          }
          props.setPosts(updatedData.data);
        } else {
          console.error("게시글을 가져오는데 실패하였습니다.");
        }
      } else {
        console.error("게시글을 가져오는데 실패하였습니다.");
      }
    } catch (error) {
      console.error("게시글을 가져오는데 실패하였습니다.:", error);
    }
  };

  // 게시글 더보기/닫기 기능
  const [isShowMore, setIsShowMore] = useState(false); // 더보기 열고 닫는 스위치
  const textLimit = useRef(100); // 글자수 제한 선언

  const commenter = useMemo(() => {
    // 조건에 따라 게시글을 보여주는 함수
    const shortReview = props.content.slice(0, textLimit.current); // 원본에서 글자 수만큼 자른 짧은 버전

    if (props.content.length > textLimit.current) {
      // 원본이 길면 (원본 글자수 > 제한된 갯수)
      if (isShowMore) {
        return props.content;
      } // 더보기가 true 면 원본 바로 리턴
      return shortReview; // (더보기가 false면) 짧은 버전 리턴
    }
    return props.content; // 그렇지않으면 (짧은 글에는) 쓴글 그대로 리턴
  }, [isShowMore]); // isShowMore의 상태가 바뀔때마다 호출됨

  const [profileImage, setProfileImage] = useState(DefaultProfileImage);

  useEffect(() => {
    const fetchProfileImage = async () => {
     
      if (props.profileURL) {
        try {
          const imageUrl = `https://api.oneulmohae.co.kr/image/${encodeURIComponent(props.profileURL)}`;
          const imageResponse = await axios.get(imageUrl, {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
            responseType: "blob",
          });

          const imageBlob = imageResponse.data;
          console.log(imageBlob)
          const imageObjectURL = URL.createObjectURL(imageBlob);
          console.log(imageObjectURL)
          setProfileImage(imageObjectURL);
        } catch (error) {
          setProfileImage(props.profileURL);
        }
      }
    };

    fetchProfileImage();
  }, [props.profileURL]);

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
            <span className={styles["community-post-date"]}>{formatDate(props.createdDate)}</span>
          </div>

          {/* 프로필 이미지+닉네임 */}
          <div className={styles["community-post-profile"]}>
            <img
              className={styles["community-post-profile-img"]}
              src={profileImage}
              alt="프로필 이미지"
              style={{ width: "32px", height: "32px" }}
              onError={(e) => { e.target.onerror = null; e.target.src = DefaultProfileImage; }}
            />
            <span className={styles["community-post-profile-nick"]}>{props.writer}</span>
          </div>

          {/* 글 내용 */}
          <span className={styles["community-post-content"]}>{commenter}</span>
          <div className={styles["community-post-content-show"]} onClick={() => setIsShowMore(!isShowMore)}>
            {props.content.length > textLimit.current && (isShowMore ? "[접기]" : "... [더 보기]")}
          </div>

          {/*공감수*/}
          <div className={styles["community-post-number-report-wapper"]}>
            <span className={styles["community-post-like-number"]}>좋아요 {props.likeCount}</span>
            <span className={styles["community-post-dot"]}>•</span>
            <span className={styles["community-post-comment-number"]} onClick={toggleComments}>댓글 {props.comments.length}</span>

            {/* 신고 아이콘 */}
            <button
              className={styles["community-post-report-button"]}
              type="button"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <img className={styles["community-post-report"]} alt="신고 아이콘" src={Report} style={{ width: "32px", height: "32px" }} />
            </button>
            {openModal ? <ReportModal openModal={openModal} setOpenModal={setOpenModal} boardId={props.boardId} /> : null}
          </div>
        </div>

        <div className={styles["community-post-button-wrapper"]}>
          {/*좋아요 버튼*/}
          <button onClick={handleClickLike} type="button" className={`${styles["community-post-like-button"]} ${showComments ? styles["show-comments"] : ""}`}>
            <img className={styles["community-post-like-button-img"]} src={imageSrcLike} />
            좋아요
          </button>

          {/* 댓글달기 버튼 */}
          <button
            type="button"
            className={`${styles["community-post-comment-button"]} ${showComments ? styles["show-comments"] : ""}`}
            onClick={toggleComments} // 댓글 달기 버튼 클릭 시 toggleComments 함수 호출
          >
            <img className={styles["community-post-comment-button-img"]} src={Comment} />
            댓글 달기
          </button>

          {/* 하단 댓글창 전체박스 */}
          <div className={`${styles["community-post-comment-container"]} ${showComments ? styles["show-comments"] : ""}`}>
            {/* 댓글 입력창 */}
            <form className={styles["community-post-comment-input-container"]} onSubmit={handleSubmit}>
              <img
                className={styles["community-post-comment-input-profile-img"]}
                src={DefaultProfileImage}
                alt="프로필 이미지"
                style={{ width: "50px", height: "50px" }}
              />
              <input
                className={styles["community-post-comment-input"]}
                type="text"
                id="comment"
                name="comment"
                minLength="2"
                maxLength="40"
                size="10"
                placeholder="댓글을 입력하세요..."
                value={content || ""}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
              <button className={styles["community-post-comment-input-button"]} type="submit">
                <img
                  className={styles["community-post-comment-input-button-img"]}
                  src={Submit}
                  alt="제출 이미지"
                  style={{ width: "35px", height: "35px", marginTop: "6px" }}
                />
                <img
                  className={styles["community-post-comment-input-button-img-hover"]}
                  src={SubmitHover}
                  alt="제출 hover 이미지"
                  style={{ width: "35px", height: "35px" }}
                />
              </button>
            </form>

            {/* 댓글 리스트 내용 */}
            {props.comments
              .slice()
              .reverse()
              .map((el) => (
                <div key={el.commentId}>
                  <ul className={styles["community-post-comment"]}>
                    <li>
                      <img
                        className={styles["community-post-comment-profile-img"]}
                        src={el.profileURL || DefaultProfileImage} // 각 댓글 작성자의 프로필 이미지
                        alt="프로필 이미지"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div className={styles["community-post-comment-box"]}>
                        <div className={styles["community-post-comment-nick-date"]}>
                          <span className={styles["community-post-comment-box-nick"]}>{el.writer}</span> {/* 각 댓글 작성자의 닉네임 */}
                          <span className={styles["community-post-comment-box-date"]}>
                            {elapsedText(new Date(el.createdAt)).toLocaleString()}
                          </span>
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
