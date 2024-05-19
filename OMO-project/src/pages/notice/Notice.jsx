import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../../components/Filter/Filter";
import styles from "./Notice.module.css";
import { noticeFilter } from './../../const/noticeFilter';
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import NoticeItems from "./../../components/NoticeItems/NoticeItems";

const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/notice?page=1&size=10&type=all`);
        setNotices(response.data.data); // 상태 업데이트
      } catch (error) {
        console.error("에러야", error);
      }
    };

    fetchData();
  }, []); // 의존성 배열에 변수를 넣으면 해당 변수가 변경될 때마다 useEffect가 실행됩니다.

  return (
    <div className={styles["notice-container"]}>
      <h2 className={styles["notice-title"]}>공지사항</h2>
      {notices.length > 0 && <hr className={styles["notice-container-hr"]} />}
      <div className={styles["notice-main-container"]}>
        {notices.length > 0 ? (
          notices.map((el) => <NoticeItems key={el.id} {...el} />)
        ) : (
          <p className={styles["notice-main-nothing"]}>공지사항이 없습니다.</p>
        )}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Notice;
