// 작성페이지 안에 있는 편집페이지 (DiaryEditor)

import styles from "./MyCourseMyVersionEdit.module.css";
import pencil from "../../../assets/my-course/write/gray-pencil.png";
import MyCourseFindBox from "./../../../components/MyCourse/MyCourseFindBox/MyCourseFindBox";
import MyCourseAfter from "../../../components/MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import { useContext, useRef, useState } from "react";
import { MyCourseDispatchContext } from "../../../App";
import { useNavigate } from "react-router-dom";


const MyCourseMyVersionEdit = () => {

  const {onCreate} = useContext(MyCourseDispatchContext);
  const contentRef = useRef();
  const [title,setTitle] = useState("");
  // const [date, setDate] = useState(getStringDate(new Date()));
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  console.log("날짜:", date);
  console.log("제목", title);
  console.log("내용:", content);
  
  const navigate= useNavigate();


  const handleSubmit = ()=>{
    if (title.length <1 ){
      contentRef.current.focus();
      alert("제목을 1자 이상 입력해주세요.")
      return;
    }
onCreate(date, title, content)
navigate('/MyCourseMain',{replace:true});
  }

  return (

    <div className={styles["mycourse-write-total-container"]}>
      <div className={styles["mycourse-write-title-container"]}>
        <input type="text" placeholder="나만의 코스" ref={contentRef} value={title} onChange={(e)=>setTitle(e.target.value)} maxLength="10" className={styles["mycourse-write-input-title"]} />
        <img src={pencil} alt="연필" className={styles["mycourse-write-img-title"]} />
      </div>
      <MyCourseFindBox date={date} setDate={setDate} />
      <MyCourseAfter />
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
