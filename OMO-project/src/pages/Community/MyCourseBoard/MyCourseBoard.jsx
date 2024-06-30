import React, {useState, useEffect} from "react";
import axios from "axios";
import styles from "./MyCourseBoard.module.css";
import {communityPageFilter} from "./../../../const/communityPageFilter";
import {CommunityCategory} from "./../../../components/CommunityCategory/CommunityCategory";
import Filter from "../../../components/Filter/Filter";
import ListSearch from "./../../../components/ListSearch/ListSearch";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import CommunityMyCourseList from "../../../components/CommunityMyCourseList/CommunityMyCourseList";
import {Link} from "react-router-dom";
import {mbtiBox} from "../../../const/mbtiBox";
import {MbtiBox} from "../../../components/MbtiBox/MbtiBox";
import WritingButtonImg from "../../../assets/writing-button.png";
import {Loading} from "../../../components/Loading/Loading";

const MyCourseBoard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [communityMyCourse, setCommunityMyCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.oneulmohae.co.kr/mycourse/mbti/17?page=1&size=10&sorting=createdAt", {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });
        setCommunityMyCourse(response.data.data);
        console.log(response);
        setIsLoading(false);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = communityMyCourse.filter((item) => 
    item.courseName && item.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* 카테고리 */}
      <CommunityCategory />

      {/* 필터 + 검색창 */}
      <div className={styles["community-component-container"]}>
        {/* <div className={styles["community-filter-container"]}>
          {communityPageFilter.map((el) => {
            return <Filter key={el.id} {...el} />;
          })}
        </div> */}
        <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
      </div>

      {/* 리스트 */}
      {filteredData && filteredData.length > 0 ? (
        <section className={styles["community-mycourse-container"]}>
          {/* MBTI pick */}
          <div className={styles["community-mbti-pick-container"]}>
            <span className={styles["community-mbti-pick-title"]}>MBTI별 pick</span>
            <ul className={styles["community-mbti-pick-box"]}>
              {mbtiBox.map((e) => {
                return <MbtiBox key={e.id} data={e} />;
              })}
            </ul>
          </div>
          <div className={styles["community-mycourse-list-box"]}>
            {filteredData.map((el) => {
              return <CommunityMyCourseList key={el.courseId} {...el} />;
            })}
          </div>
        </section>
      ) : (
        <div className={styles["list-no-search-result-container"]}>
          <span className={styles["list-no-search-result"]}>검색 결과가 없습니다.</span>
        </div>
      )}

      <ScrollToTop />

      <Link to="/MyCourseNewWrite">
        <div className={styles["writing-btn-container"]}>
          <button type="button" className={styles["writing-btn"]}>
            <img src={WritingButtonImg} alt="글쓰기 아이콘" style={{width: "80px", height: "80px"}} />{" "}
          </button>
        </div>
      </Link>
    </>
  );
};

export default MyCourseBoard;
