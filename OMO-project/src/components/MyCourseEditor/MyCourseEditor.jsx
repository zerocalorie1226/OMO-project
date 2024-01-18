// 글쓰기(새로운코스) + 수정(기존코스)

import {useContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./MyCourseEditor.module.css";
import {MyCourseDispatchContext} from "../../App";
import pencil from "../../assets/my-course/write/gray-pencil.png";
import MyCourseFindBox from "./../MyCourse/MyCourseFindBox/MyCourseFindBox";
import MyCourseAfter from "./../MyCourse/MyCourseAfter/MyCourseAfter";
import MyCourseCalendar from "./../MyCourse/MyCourseCalendar/MyCourseCalendar";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";

const MyCourseEditor = ({isEdit, originData}) => {
  const getStringDate = (date) => {
    return date.toISOString().slice(0, 16);
  };
  const {onCreate, onEdit} = useContext(MyCourseDispatchContext);
  const titleRef = useRef();
  const contentRef = useRef();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(getStringDate(new Date()));
  const [content, setContent] = useState("");
  console.log("MyCourseEditor에서 날짜:", date);
  console.log("MyCourseEditor에서 제목", title);
  console.log("MyCourseEditor에서 내용:", content);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title.length < 1) {
      titleRef.current.focus();
      alert("제목을 1자 이상 입력해주세요.");
      return;
    }

    if (window.confirm(isEdit ? "코스를 수정하시겠습니까?" : "새로운 코스를 작성하시겠습니까?")) {
      if (!isEdit) {
        onCreate(date, title, content);
      } else {
        onEdit(originData.id, date, title, content);
      }
    }

    navigate("/MyCourseMain", {replace: true});
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setTitle(originData.title);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className={styles["mycourse-editor-total-container"]}>
      <div className={styles["mycourse-editor-subject-container"]}> {isEdit ? "수정하기" : "새로운 코스 만들기"}</div>
      <div className={styles["mycourse-editor-title-container"]}>
        <input
          type="text"
          placeholder="코스 이름을 적어주세요."
          ref={titleRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength="8"
          className={styles["mycourse-editor-input-title"]}
        />
        <img src={pencil} alt="연필" className={styles["mycourse-editor-pencil-img"]} />
      </div>

      <div className={styles["mycourse-editor-course-container"]}>
        <textarea type="text" placeholder="내용입니다" ref={contentRef} value={content} onChange={(e) => setContent(e.target.value)} className={styles["mycourse-editor-content"]} />
        <MyCourseFindBox date={date} setDate={setDate} content={content} setContent={setContent} />
        <MyCourseAfter date={date} setDate={setDate} content={content} setContent={setContent} />
      </div>
      <div className={styles["save-button-container"]}>
        <button type="button" className={styles["save-button"]} onClick={handleSubmit}>
          저장
        </button>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default MyCourseEditor;
