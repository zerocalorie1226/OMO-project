import styles from "./Share.module.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Share = ({ courseId }) => {
  const navigate = useNavigate();

  const handleShare = async () => {
    try {
      const response = await axios.patch(`https://api.oneulmohae.co.kr/mycourse/share/${courseId}`, {}, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      });

      if (response.status === 200) {
        alert("공유되었습니다.");
        navigate("/MyCourseBoard", { replace: true });
      } else {
        console.error("공유에 실패하였습니다.");
      }
    } catch (error) {
      console.error("공유에 실패하였습니다.", error);
    }
  };

  return (
    <div className={styles["edit-share-button-container"]}>
      <button
        type="button"
        className={styles["share-button"]}
        onClick={handleShare}
      >
        커뮤니티에 공유
      </button>
    </div>
  );
};

export default Share;
