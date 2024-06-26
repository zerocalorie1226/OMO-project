import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./MyCourseEditor.module.css";
import pencil from "../../assets/my-course/write/gray-pencil.png";
import MyCourseFindBox from "./../MyCourse/MyCourseFindBox/MyCourseFindBox";
import MyCourseAfter from "./../MyCourse/MyCourseAfter/MyCourseAfter";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";
import axios from "axios";

const MyCourseEditor = () => {
  const getStringDate = (time) => {
    return time.toISOString().slice(0, 16);
  };
  const courseNameRef = useRef();
  const [courseName, setCourseName] = useState("");
  const [time, setTime] = useState([getStringDate(new Date())]);
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
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
      const placeNames = content.map((place) => place.place_name);
      const placeIds = content.map((place) => place.id);

      const postData = {
        courseName: courseName,
        placeName: placeNames,
        placeId: placeIds,
        time: time,
      };

      try {
        await axios.post("https://api.oneulmohae.co.kr/mycourse/new", postData, {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
          },
        });
        alert("새로운 코스가 저장되었습니다.");

        navigate("/MyCourseMain", {replace: true});
      } catch (error) {
        console.error("Error posting data:", error);
        alert("코스를 저장하는 데 실패했습니다.");
      }
    }
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
