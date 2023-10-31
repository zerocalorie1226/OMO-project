import styles from "./Edit-Share.module.css";
import {useNavigate} from "react-router-dom";

const EditShare = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["edit-share-button-container"]}>
      <button
        type="button"
        className={styles["edit-button"]}
        onClick={() => {
          navigate("/MyCourseWrite");
        }}
      >
        편집
      </button>
      <button
        type="button"
        className={styles["share-button"]}
        onClick={() => {
          alert("공유되었습니다.");
          navigate("/MyCourseBoard");
        }}
      >
        커뮤니티에 공유
      </button>
    </div>
  );
};
export default EditShare;
