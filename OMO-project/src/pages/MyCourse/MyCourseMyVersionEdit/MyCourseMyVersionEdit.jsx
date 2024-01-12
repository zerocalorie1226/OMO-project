// 작성페이지 안에 있는 편집페이지 (DiaryEditor)

import styles from "./MyCourseMyVersionEdit.module.css";
import pencil from "../../../assets/my-course/write/gray-pencil.png";
import MyCourseFindBox from "./../../../components/MyCourse/MyCourseFindBox/MyCourseFindBox";
import MyCourseAfter from "../../../components/MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {useContext, useEffect, useRef, useState} from "react";
import {MyCourseDispatchContext} from "../../../App";
import {useNavigate} from "react-router-dom";
import MyCourseCalendar from "../../../components/MyCourse/MyCourseCalendar/MyCourseCalendar";

const MyCourseMyVersionEdit = ({isEdit, originData}) => {


  const getStringDate = (date) => {
    return date.toISOString().slice(0, 16);
  };
  const {onCreate, onEdit} = useContext(MyCourseDispatchContext);
  const titleRef = useRef();
  const contentRef = useRef();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(getStringDate(new Date()));
  const [content, setContent] = useState("");
  console.log("날짜:", date);
  console.log("제목", title);
  console.log("내용:", content);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title.length < 1) {
      titleRef.current.focus();
      alert("제목을 1자 이상 입력해주세요.");
      return;
    }

    if(window.confirm(isEdit ? "코스를 수정하시겠습니까?" : "새로운 코스를 작성하시겠습니까?")){
      if(!isEdit){
        onCreate(date, title, content);

      }else{
        onEdit(originData.id, date, title, content)
      }
    }

    navigate("/MyCourseMain", {replace: true});
  };

useEffect(()=>{
  if(isEdit){
    setDate(getStringDate(new Date(parseInt(originData.date))))
    setTitle(originData.title);
    setContent(originData.content);

  }
},[isEdit, originData])





  return (
    <div className={styles["mycourse-write-total-container"]}>
      <div className={styles["mycourse-write-title-container"]}>
        <div> {isEdit ? "수정하기":"새로운 코스 만들기"}</div>
        <input type="text" placeholder="나만의 코스" ref={titleRef} value={title} onChange={(e) => setTitle(e.target.value)} maxLength="10" className={styles["mycourse-write-input-title"]} />
        <img src={pencil} alt="연필" className={styles["mycourse-write-img-title"]} />
      </div>
      <div className={styles["mycourse-write-course-container"]}>
      <MyCourseCalendar date={date} setDate={setDate} />
      <textarea type="text" placeholder="내용입니다" ref={contentRef} value={content} onChange={(e) => setContent(e.target.value)} className={styles["mycourse-write-content"]} />
        {/* <MyCourseFindBox date={date} setDate={setDate} /> */}
        {/* <MyCourseAfter date={date} setDate={setDate}  /> */}
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

export default MyCourseMyVersionEdit;
