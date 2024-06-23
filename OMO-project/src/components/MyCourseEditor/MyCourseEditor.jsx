// 글쓰기(새로운코스) + 수정(기존코스)

import {useContext, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./MyCourseEditor.module.css";
import {MyCourseDispatchContext} from "../../assets/context/MyCourseContext";
import pencil from "../../assets/my-course/write/gray-pencil.png";
import MyCourseFindBox from "./../MyCourse/MyCourseFindBox/MyCourseFindBox";
import MyCourseAfter from "./../MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";

const MyCourseEditor = () => {
  const getStringDate = (time) => {
    return time.toISOString().slice(0, 16);
  };
  const {onCreate} = useContext(MyCourseDispatchContext);
  const courseNameRef = useRef();
  const [courseName, setCourseName] = useState("");
  const [time, setTime] = useState([getStringDate(new Date())]);
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date().toLocaleString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour12: false }));
  console.log("MyCourseEditor에서 날짜:", time);
  // console.log("MyCourseEditor에서 제목", courseName);
  console.log("MyCourseEditor에서 내용:", content);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (courseName.length < 1) {
      courseNameRef.current.focus();
      alert("제목을 1자 이상 입력해주세요.");
      return;
    }

    if (time.length < content.length) {
      alert("날짜를 입력해주세요.");
      return;
    }
    if (content.length < time.length) {
      alert("내용을 입력해주세요.");
      return;
    }

    if (window.confirm("새로운 코스를 작성하시겠습니까?")) {
      setCreatedAt(new Date().toLocaleString("ko-KR", {year: "numeric", month: "2-digit", day: "2-digit", hour12: false}));
      onCreate(time, courseName, content, createdAt);
    }

    navigate("/MyCourseMain", {replace: true});
  };

  return (
    <div className={styles["mycourse-editor-total-container"]}>
      <div className={styles["mycourse-editor-subject-container"]}>새로운 코스 만들기</div>
      <div className={styles["mycourse-editor-course-name-container"]}>
        <input
          type="text"
          placeholder="코스 이름을 적어주세요."
          ref={courseNameRef}
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          maxLength="8"
          className={styles["mycourse-editor-input-course-name"]}
        />
        <img src={pencil} alt="연필" className={styles["mycourse-editor-pencil-img"]} />
      </div>

      <div className={styles["mycourse-editor-course-container"]}>
        <MyCourseFindBox time={time} setTime={setTime} content={content} setContent={setContent} idx={0} />
        <MyCourseAfter time={time} setTime={setTime} content={content} setContent={setContent} />
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
