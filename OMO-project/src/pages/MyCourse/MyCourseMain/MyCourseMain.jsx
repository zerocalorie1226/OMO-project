import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {WritingButton} from "../../../components/WritingButton/WritingButton";
import MyCourseList from "../../../components/MyCourse/MyCourseList/MyCourseList";
import styles from "./MyCourseMain.module.css";
import {Loading} from "../../../components/Loading/Loading";
import ListSearch from "../../../components/ListSearch/ListSearch";

const MyCourseMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [myCourseList, setMyCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.oneulmohae.co.kr/mycourse/myCourse", {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });

        setMyCourseList(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("데이터를 불러오는 데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = myCourseList.filter((item) => item.courseName.toLowerCase().includes(searchTerm.toLowerCase()));

  const onSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles["mycourse-container"]}>
      <h2 className={styles["mycourse-title"]}>나만의 코스</h2>
     <div className={styles["mycourse-search-container"]}>
      <ListSearch searchTerm={searchTerm} onSearch={onSearch} />
      </div>
      {filteredData &&filteredData.length === 0 ? (
        <div className={styles["no-boardlist"]}>글 작성 내역이 없습니다. 우측 하단에 있는 글쓰기 버튼을 통해 게시글을 작성해주세요.</div>
      ) : (
        <div className={styles["mycourse-list-container"]}>
          <MyCourseList myCourseList={filteredData} />
        </div>
      )}

      <ScrollToTop />
      <Link to="/MyCourseNewWrite">
        <WritingButton />
      </Link>
    </div>
  );
};

export default MyCourseMain;
