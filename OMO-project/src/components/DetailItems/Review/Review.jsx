import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Review.module.css";
import logoCircle from "../../../assets/logo-circle.png";
import { elapsedText } from './../../../utils/Time/elapsedText';

export const Review = ({ id, writer, createdDate, imageName, content, profileImageUrl, fetchImgFile, writerProfileImage }) => {
  const [profileImage, setProfileImage] = useState(logoCircle);

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (writerProfileImage) {
        try {
          const imageUrl = `https://api.oneulmohae.co.kr/image/${encodeURIComponent(writerProfileImage)}`;
          const imageResponse = await axios.get(imageUrl, {
            headers: {
              Authorization: localStorage.getItem("accessToken"),
            },
            responseType: "blob",
          });

          const imageBlob = imageResponse.data;
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setProfileImage(imageObjectURL);
        } catch (error) {
          setProfileImage(logoCircle);
        }
      }
    };

    fetchProfileImage();
  }, [writerProfileImage]);

  return (
    <>
      <div className={styles["detail-review-box"]}>
        <div className={styles["detail-review-inner-top-container"]}>
          <div className={styles["detail-review-profile"]}>
            {fetchImgFile && <img src={fetchImgFile} alt="리뷰 이미지" className={styles["detail-review-image"]} />} {/* 이미지가 있을 때만 이미지 표시 */}
            <div className={styles["detail-review-profile-img"]}>
              <img src={profileImage} alt="프로필 이미지" style={{ width: "50px", height: "50px" }} onError={(e) => { e.target.onerror = null; e.target.src = logoCircle; }} />
              <span className={styles["detail-review-profile-nick"]}>{writer}</span>
              <p className={`${styles["detail-review-content"]} ${!imageName && styles["detail-review-no-image"]}`}>{content}</p>
            </div>
          </div>
          <span className={styles["detail-review-date"]}>{elapsedText(new Date(createdDate)).toLocaleString()}</span>
        </div>
      </div>
    </>
  );
};
