import axios from "axios";
import styles from "./MyInfo.module.css";
import Mypage from "../../../components/Mypage/Mypage";
import MyInfoIcon from "../../../assets/my-page/my-info/my-info.png";
import DefaultProfileImage from "../../../assets/detail/defaultDetailIcon.png";
import { useEffect, useState, useReducer, useContext } from "react";
import { BoardDispatchContext, BoardStateContext } from "../MyWrote/MyWrote";
import { MyCourseStateContext } from "../../../App";
import { mbtiReverseMapping } from "../../../const/mbtiReverseMapping";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    default:
      return state;
  }

  return newState;
};

const MyInfo = () => {
  const myCourseList = useContext(MyCourseStateContext);
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localWorryData = JSON.parse(localStorage.getItem("worryboard")) || [];
    const localFreeData = JSON.parse(localStorage.getItem("freeboard")) || [];
    const localQnaData = JSON.parse(localStorage.getItem("qnaboard")) || [];
    dispatch({ type: "INIT", data: [...localWorryData, ...localFreeData, ...localQnaData] });
  }, []);

  const [myInfoData, setMyInfoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/myPage/myInfo/${localStorage.getItem("memberId")}`, {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        });
        setMyInfoData(response.data); 
      } catch (error) {
        console.error("에러야", error);
      }
    };

    fetchData();
  }, []); 

  const getMbtiString = (mbtiValue) => {
    return mbtiReverseMapping[mbtiValue] || "Unknown MBTI";
  };

  return (
    <>
      <BoardStateContext.Provider value={data}>
        <BoardDispatchContext.Provider value={data}>
          <div className={styles["myinfo-total-container"]}>
            <h2 className={styles["myinfo-title-container"]}>
              <img src={MyInfoIcon} alt="내 정보 아이콘" /> 내 정보
            </h2>
            <div className={styles["myinfo-categories-container"]}>
              <Mypage myInfoData={myInfoData} />
              {myInfoData && (
                <div className={styles["myinfo-logo-info-container"]}>
                  <img 
                    className={styles["myinfo-circle-logo"]} 
                    src={myInfoData.profileImageUrl || DefaultProfileImage} 
                    alt="기본 프로필" 
                    onError={(e) => { e.target.onerror = null; e.target.src = DefaultProfileImage; }}
                  />
                  <div className={styles["myinfo-info-container"]}>
                    <div className={styles["myinfo-nickname-container"]}>
                        <p>닉네임</p>
                        <p className={styles["myinfo-nickname-line"]}>|</p>
                        <p className={styles["myinfo-nickname"]}>{myInfoData.nickname}</p>
                    </div>
                    <div className={styles["myinfo-email-container"]}>
                      <p>이메일</p>
                      <p className={styles["myinfo-email-line"]}>|</p>
                      <p className={styles["myinfo-email"]}>{myInfoData.email}</p>
                    </div>
                    <div className={styles["myinfo-birthday-container"]}>
                      <p>생년월일</p>
                      <p className={styles["myinfo-birthday-line"]}>|</p>
                      <p  className={styles["myinfo-birthday"]}>{myInfoData.birth}</p>
                    </div>
                    <div className={styles["myinfo-mbti-container"]}>
                      <p>MBTI</p>
                      <p className={styles["myinfo-mbti-line"]}>|</p>
                      <p className={styles["myinfo-mbti"]}>{getMbtiString(myInfoData.mbti)}</p>
                    </div>
                  </div>
                  <div className={styles["myinfo-status-container"]}>
                    <p className={styles["myinfo-status-myStatus"]}>내 정보</p>
                    <div className={styles["myinfo-status-heart"]}>
                      <p className={styles["myinfo-status-heart-title"]}>내 관심 수</p>
                      <p className={styles["myinfo-status-heart-num"]}>{myInfoData.placeLikeCount}</p>
                    </div>
                    <div className={styles["myinfo-status-thumb"]}>
                      <p className={styles["myinfo-status-thumb-title"]}>내 추천 수</p>
                      <p className={styles["myinfo-status-thumb-num"]}>{myInfoData.placeRecommendCount}</p>
                    </div>
                    <div className={styles["myinfo-status-write"]}>
                      <p className={styles["myinfo-status-write-title"]}>내가 쓴 글</p>
                      <p className={styles["myinfo-status-write-num"]}>{myInfoData.myWrittenBoardCount}</p>
                    </div>
                    <div className={styles["myinfo-status-course"]}>
                      <p className={styles["myinfo-status-course-title"]}>나의 코스</p>
                      <p className={styles["myinfo-status-course-num"]}>{myInfoData.myCourseCount}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>
    </>
  );
};
export default MyInfo;
