import styles from "./NicknameChange.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NicknameChange = () => {
  const [nickname, setNickname] = useState("");

  const ChangeNickName = async () => {
    const confirmChange = window.confirm("닉네임을 변경하시겠습니까?");

    if (confirmChange) {
      try {
        const memberId = localStorage.getItem("memberId");
        const response = await axios.patch(
          `https://api.oneulmohae.co.kr/myPage/nickname/${memberId}`,
          { nickname },
          {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
            withCredentials: true,
          }
        );

        if (response.status === 200 || response.status === 204) {
          alert("닉네임이 변경되었습니다.");
          window.location.reload(); 
        } else {
          console.error("Failed to change nickname");
          alert("닉네임 변경 중 오류가 발생했습니다. 다시 시도해 주세요.");
        }
      } catch (error) {
        console.error("Error changing nickname:", error);
        alert("닉네임 변경 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <div className={styles["profile-setting-main-nickname-change-container"]}>
      <p className={styles["profile-setting-main-nickname-change-title"]}>닉네임 변경</p>
      <input
        type="text"
        placeholder="닉네임을 입력해주세요."
        className={styles["profile-setting-main-nickname-change-input"]}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button
        type="button"
        className={styles["profile-setting-main-nickname-change-button"]}
        onClick={ChangeNickName}
      >
        변경하기
      </button>
    </div>
  );
};

export default NicknameChange;
