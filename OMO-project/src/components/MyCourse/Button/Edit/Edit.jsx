import styles from "./Edit.module.css";
import {useNavigate} from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        type="button"
        className={styles["edit-button"]}
        onClick={() => {
          navigate("/MyCourseWrite", {replace: true});
        }}
      >
        편집
      </button>
    </div>
  );
};
export default Edit;
