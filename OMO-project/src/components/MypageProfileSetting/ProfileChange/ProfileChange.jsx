import axios from "axios";
import styles from "./ProfileChange.module.css";
import DeleteImg from "../../../assets/my-page/setting/profile-delete.png";
import { useRef, useState, useEffect } from "react";
import DefaultImg from "../../../assets/my-page/setting/default-background.png";

const ProfileChange = () => {
  const [Image, setImage] = useState(DefaultImg);
  const [File, setFile] = useState("");
  const fileInput = useRef(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      const memberId = localStorage.getItem("memberId");
      const accessToken = localStorage.getItem("accessToken");

      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/myPage/myInfo/${memberId}`, {
          headers: {
            Authorization: accessToken,
          },
        });

        if (response.data.profileImageUrl) {
          const imageUrl = `https://api.oneulmohae.co.kr/image/${encodeURIComponent(response.data.profileImageUrl)}`;

          const imageResponse = await axios.get(imageUrl, {
            headers: {
              Authorization: accessToken,
            },
            responseType: "blob",
          });

          const imageBlob = imageResponse.data;
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setImage(imageObjectURL);
        }
      } catch (error) {
        setImage(DefaultImg); 
      }
    };

    fetchProfileImage();
  }, []);

  const onChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      // 업로드 취소할 시
      setImage(DefaultImg);
      return;
    }
    // 화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const ChangeProfileButton = async () => {
    const confirmChange = window.confirm("프로필 사진을 변경하시겠습니까?");

    if (confirmChange) {
      try {
        const memberId = localStorage.getItem("memberId");
        const accessToken = localStorage.getItem("accessToken");

        if (!File) {
          alert("변경할 프로필 사진을 선택해 주세요.");
          return;
        }

        const formData = new FormData();
        formData.append("image", File);

        const response = await axios.patch(
          `https://api.oneulmohae.co.kr/myPage/profileImage/${memberId}`,
          formData,
          {
            headers: {
              Authorization: accessToken,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          const profileImageUrl = response.data.profileImageUrl;
          const imageUrl = `https://api.oneulmohae.co.kr/image/${encodeURIComponent(profileImageUrl)}`;

          const imageResponse = await axios.get(imageUrl, {
            headers: {
              Authorization: accessToken,
            },
            responseType: "blob",
          });

          const imageBlob = imageResponse.data;
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setImage(imageObjectURL);
          window.location.reload(); // 페이지 리로딩
          alert("프로필 사진이 변경되었습니다.");

        } else {
          alert("프로필 사진 변경에 실패했습니다. 다시 시도해 주세요.");
        }
      } catch (error) {
        console.error("프로필 사진 변경 중 오류 발생:", error);
        alert("프로필 사진 변경 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <div className={styles["profile-setting-main-profile-change-container"]}>
      <p className={styles["profile-setting-main-profile-change-title"]}>프로필 변경</p>
      <div className={styles["profile-setting-main-profile-change-img-box"]}>
        <img src={Image} alt="프로필 사진" className={styles["profile-setting-main-profile-change-img"]} />
        <label className={styles["profile-setting-main-profile-change-add-img"]} htmlFor="input-file">
          <span className={styles["profile-setting-main-profile-change-add-img-icon"]}>블로그 이미지 찾아보기</span>
          <input
            type="file"
            accept="image/*"
            id="input-file"
            className={styles["profile-setting-main-profile-change-add-img-input"]}
            onClick={() => {
              fileInput.current.value = null;
              fileInput.current.click();
            }}
            ref={fileInput}
            onChange={onChange}
          />
        </label>
        <button
          type="button"
          className={styles["profile-setting-main-profile-change-delete"]}
          onClick={() => {
            if (window.confirm("이미지를 삭제하겠습니까?")) {
              setImage(DefaultImg);
            }
          }}
        >
          {Image !== DefaultImg && <img src={DeleteImg} alt="이미지 삭제" className={styles["profile-setting-main-profile-change-delete-img"]} />}
        </button>
      </div>
      <button
        type="button"
        className={styles["profile-setting-main-profile-change-button"]}
        onClick={ChangeProfileButton}
      >
        변경하기
      </button>
    </div>
  );
};

export default ProfileChange;
