import styles from "./Share.module.css";
import {useNavigate} from "react-router-dom";

const Share = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["edit-share-button-container"]}>
      <button
        type="button"
        className={styles["share-button"]}
        onClick={() => {
          alert("공유되었습니다.");
          navigate("/MyCourseBoard", { replace: true });
        }}
      >
        커뮤니티에 공유
      </button>
    </div>
  );
};
export default Share;
