import {useState, useRef, useEffect} from "react";
import styles from "./DetailItemsMenu.module.css";
import Jjim from "../../../assets/detail/empty-heart.png";
import JjimClicked from "../../../assets/detail/red-heart.png";
import Like from "../../../assets/detail/empty-thumb.png";
import LikeClicked from "../../../assets/detail/purple-thumb.png";
import Address from "../../../assets/detail/address.png";
import SalesInfo from "../../../assets/detail/sales-info.png";
import Menu from "../../../assets/detail/menu.png";
import Call from "../../../assets/detail/call.png";
import Graph from "../../../assets/detail/graph.png";
import ReviewIcon from "../../../assets/detail/review.png";
import Submit from "../../../assets/submit.png";
import SubmitHover from "../../../assets/submit-hover.png";
import Magnifier from "../../../assets/detail/magnifier.png";
import {Review} from "../Review/Review";
// import { Map } from "./../../../components/Map/Map";
import {priceTemplate} from "../../../utils/priceTemplate";
import {reviewData} from "../../../const/reviewData";

import DeleteImg from "../../../assets/my-page/setting/profile-delete.png";
import DefaultImg from "../../../assets/detail/detail-default-background.png";
import defaultDetailIcon from"../../../assets/detail/defaultDetailIcon.png"
import {BeatLoader} from "react-spinners";
import { Loading } from "../../Loading/Loading";


export const DetailItemsMenu = (props) => {
  console.log("상세페이지 props: ", props);
  const [item, setItem] = useState([]); // 상태변화함수, 빈배열로 시작

  const [content, setContent] = useState(""); // 댓글 내용

  const dataId = useRef(0); // id 인덱스 추가-> 변수처럼 사용 필요 -> useRef 사용

  // 데이터 가져오기
  // const { data } = props;

  // 하트 버튼 (관심)
  const [imageSrcJjim, setImageSrcJjim] = useState(Jjim);
  const [isClikedJjim, setIsClickedJjim] = useState(false);
  const [countJjim, setCountJjim] = useState(0); // 초기값을 0 또는 적절한 기본값으로 설정

  useEffect(() => {
    if (props.DetailItemsMenuData) {
      setCountJjim(props.DetailItemsMenuData.mine); // 데이터가 로드되면 상태 업데이트
    }
  }, [props.DetailItemsMenuData]); // props.DetailItemsMenuData가 변경될 때마다 실행

  // 따봉 버튼 (추천)
  const [imageSrcLike, setImageSrcLike] = useState(Like);
  const [isClikedLike, setIsClickedLike] = useState(false);
  const [countLike, setCountLike] = useState(0);

  useEffect(() => {
    if (props.DetailItemsMenuData) {
      setCountLike(props.DetailItemsMenuData.recommend); // 데이터가 로드되면 상태 업데이트
    }
  }, [props.DetailItemsMenuData]); // props.DetailItemsMenuData가 변경될 때마다 실행

  // onCreate 함수 (댓글 리스트에 댓글 추가)
  const onCreate = (content, imageSrc) => {
    const created_date = new Date().getTime();
    const newItem = {
      content,
      imageSrc, // 이미지 경로 추가
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setItem([newItem, ...item]);
  };

  // handleClickJjim 함수 (하트 버튼 (관심) - 색, 카운트)
  const handleClickJjim = () => {
    if (isClikedJjim) {
      setImageSrcJjim(Jjim);
      setIsClickedJjim(false);
      setCountJjim((count) => count - 1);
      props.updateJjimData(false);
    } else {
      setImageSrcJjim(JjimClicked);
      setIsClickedJjim(true);
      setCountJjim((count) => count + 1);
      props.updateJjimData(true);
    }
  };

  // handleClickLike 함수 (따봉 버튼 (추천) - 색, 카운트)
  const handleClickLike = () => {
    if (isClikedLike) {
      setImageSrcLike(Like);
      setIsClickedLike(false);
      setCountLike(countLike - 1);
      props.updateLikeData(false);
    } else {
      setImageSrcLike(LikeClicked);
      setIsClickedLike(true);
      setCountLike(countLike + 1);
      props.updateLikeData(true);
    }
  };

  //  리뷰 사진 체출
  const [Image, setImage] = useState(DefaultImg);
  const [File, setFile] = useState("");

  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(DefaultImg);
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // handleSubmit
  const handleSubmit = () => {
    if (content.length < 1) {
      alert("리뷰는 최소 1글자 이상 입력해주세요");
      return;
    }
    const imageToUpload = Image !== DefaultImg ? Image : ""; // 이미지가 기본 이미지와 다르면 이미지 사용, 아니면 빈 문자열
    onCreate(content, imageToUpload);
    setContent("");
    setImage(DefaultImg); // 이미지 초기화
  };

  // handleOnKeyPress함수 (input에 적용할 Enter 키 입력 함수)
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  // 지도 표시
  const mapContainer = useRef(null); // 지도를 표시할 div의 ref

  useEffect(() => {
    // 카카오맵 스크립트 로드
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=36a2e85facafe4523773ac62c9e870a8&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        if (props.DetailItemsMenuData) {
          const {y: latitude, x: longitude} = props.DetailItemsMenuData;
          const mapCenter = new kakao.maps.LatLng(latitude, longitude); // 지도의 중심 좌표

          const mapOption = {
            center: mapCenter, // 지도의 중심 좌표
            level: 3, // 지도 확대 레벨
            draggable: false, // 지도 이동 및 마우스 휠 확대/축소를 막기
          };

          const map = new kakao.maps.Map(mapContainer.current, mapOption); // 지도 생성

          const mapTypeControl = new kakao.maps.MapTypeControl(); // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤 생성

          // 지도에 컨트롤을 추가
          map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT); // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미

          // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
          const zoomControl = new kakao.maps.ZoomControl();
          map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

          // 마커 생성
          const marker = new kakao.maps.Marker({
            position: mapCenter,
          });

          // 마커가 지도 위에 표시되도록 설정
          marker.setMap(map);

          // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능
          const iwContent = `<div style="padding:5px;">${props.DetailItemsMenuData.place_name}<br><a href="https://map.kakao.com/link/map/${props.DetailItemsMenuData.place_name},${props.DetailItemsMenuData.y},${props.DetailItemsMenuData.x}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${props.DetailItemsMenuData.place_name},${props.DetailItemsMenuData.y},${props.DetailItemsMenuData.x}" style="color:blue" target="_blank">길찾기</a></div>`;

          const iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); // 인포윈도우 표시 위치

          // 인포윈도우 생성
          const infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent,
          });

          // 마커 위에 인포윈도우를 표시
          infowindow.open(map, marker); // 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시
        }
      });
    };

    return () => script.remove();
  }, [props.DetailItemsMenuData]);

  console.log(item)
  return (
    <>
      {props.DetailItemsMenuData === null ? (
        <Loading/>
      ) : (
        <div>
          <section className={styles["detail-title-container"]}>
            <div className={styles["detail-thumbnail-container"]}>
              <img src={item.length==0?defaultDetailIcon:item[0].imageSrc} alt="썸네일 이미지" />
            </div>
            <span className={styles["detail-title"]}>{props.DetailItemsMenuData.place_name}</span>
            <div className={styles["detail-like-jjim-container"]}>
              <div className={styles["detail-jjim"]}>
                <span className={styles["detail-jjim-line"]}>|</span>
                <button type="button" onClick={handleClickJjim}>
                  <img src={imageSrcJjim} alt="찜 아이콘" style={{position: "absolute", top: "1px"}} />
                </button>
                <span className={styles["detail-jjim-number"]}> {countJjim}</span>
                {/* <span className={styles["detail-jjim-number"]}> 999+</span> */}
              </div>
              <div className={styles["detail-like"]}>
                <span className={styles["detail-like-line"]}>|</span>
                <button type="button" onClick={handleClickLike}>
                  <img src={imageSrcLike} alt="좋아요 아이콘" style={{position: "absolute", top: "-1px"}} />
                </button>
                <span className={styles["detail-like-number"]}> {countLike}</span>
                {/* <span className={styles["detail-like-number"]}>999+</span> */}
              </div>
            </div>
          </section>
          <div className={styles["detail-inner-container"]}>
            <section className={styles["detail-address-container"]}>
              <div className={styles["detail-address-inner-container"]}>
                <img src={Address} alt="주소 아이콘" style={{width: "20px", height: "25px", position: "absolute", top: "1px"}} />
                <span className={styles["detail-address-title"]}>주소</span>
              </div>
              <span className={styles["detail-address-info-street"]}>{props.DetailItemsMenuData.road_address_name}</span>
              <span className={styles["detail-address-info-number"]}>{props.DetailItemsMenuData.address_name}</span>
            </section>

            {/* <section className={styles["detail-sales-info-container"]}>
          <div className={styles["detail-sales-info-inner-container"]}>
            <img src={SalesInfo} alt="영업정보 아이콘" style={{ width: "25px", height: "25px", position: "absolute", top: "3px" }} />
            <span className={styles["detail-sales-info-title"]}>영업정보</span>
          </div>
          <div className={styles["detail-sales-info-time-container"]}>
            <span className={styles["detail-sales-info-time"]}>시간</span>
            <span className={styles["detail-sales-info-line"]}>|</span>
            <span className={styles["detail-sales-info-time-info"]}>{props.DetailItemsMenuData.time}</span>
          </div>
          <div className={styles["detail-sales-info-holiday-container"]}>
            <span className={styles["detail-sales-info-holiday"]}>휴무</span> <span className={styles["detail-sales-info-line"]}>|</span>
            <span className={styles["detail-sales-info-holiday-info"]}>{props.DetailItemsMenuData.holiday}</span>
          </div>
        </section> */}

            {/* <section className={styles["detail-menu-container"]}>
          <div className={styles["detail-menu-inner-container"]}>
            <img src={Menu} alt="메뉴 아이콘" style={{ width: "20px", height: "25px", position: "absolute", top: "1px" }} />
            <span className={styles["detail-menu-title"]}>메뉴</span>
          </div>
          {props.DetailItemsMenuData.menu.map((el) => (
            <div key={el.id}>
              <ul className={styles["detail-menu"]}>
                <li className={styles["detail-menu-list"]}>
                  <span className={styles["detail-menu-list-title"]}>{el.title}</span> <span className={styles["detail-menu-list-price"]}>{priceTemplate(el.price)}원</span>
                </li>
              </ul>
            </div>
          ))}
        </section> */}

            <section className={styles["detail-call-container"]}>
              <div className={styles["detail-call-inner-container"]}>
                <img src={Call} alt="전화 아이콘" style={{width: "25px", height: "25px", position: "absolute", top: "1px"}} />
                <span className={styles["detail-call-title"]}>전화</span>
              </div>
              <span className={styles["detail-call"]}>{props.DetailItemsMenuData.phone}</span>
            </section>

            <section className={styles["detail-google-map-container"]}>
              <div ref={mapContainer} style={{width: "100%", height: "500px"}}></div>
            </section>

            <section className={styles["detail-mbti-stats-container"]}>
              <div className={styles["detail-mbti-stats-inner-container"]}>
                <img src={Graph} alt="통계 아이콘" style={{width: "25px", height: "25px", position: "absolute", top: "1px"}} />
                <span className={styles["detail-mbti-stats-title"]}>MBTI별 통계</span>
              </div>

              <div className={styles["detail-mbti-graph-container"]}>
                <div className={styles["detail-mbti-graph-inner-container"]}>
                  <div className={styles["detail-mbti-graph-alphabat-box"]}>
                    <span className={styles["detail-mbti-graph-alphabat"]}>E</span>
                    <span className={styles["detail-mbti-graph-text"]}>외향</span>
                  </div>
                  <div className={styles["detail-mbti-graph-EI-bar"]}>
                    <div className={styles["detail-mbti-graph-EI-bar-percent"]}></div>
                  </div>
                  <div className={styles["detail-mbti-graph-alphabat-box"]}>
                    <span className={styles["detail-mbti-graph-alphabat"]}>I</span>
                    <span className={styles["detail-mbti-graph-text"]}>내향</span>
                  </div>
                </div>

                <div className={styles["detail-mbti-graph-inner-container"]}>
                  <div className={styles["detail-mbti-graph-alphabat-box"]}>
                    <span className={styles["detail-mbti-graph-alphabat"]}>S</span>
                    <span className={styles["detail-mbti-graph-text"]}>현실</span>
                  </div>
                  <div className={styles["detail-mbti-graph-SN-bar"]}>
                    <div className={styles["detail-mbti-graph-SN-bar-percent"]}></div>
                  </div>
                  <div className={styles["detail-mbti-graph-alphabat-box"]}>
                    <span className={styles["detail-mbti-graph-N"]}>N</span>
                    <span className={styles["detail-mbti-graph-text"]}>직관</span>
                  </div>
                </div>

                <div className={styles["detail-mbti-graph-inner-container"]}>
                  <div className={styles["detail-mbti-graph-alphabat-box"]}>
                    <span className={styles["detail-mbti-graph-alphabat"]}>T</span>
                    <span className={styles["detail-mbti-graph-text"]}>사고</span>
                  </div>
                  <div className={styles["detail-mbti-graph-TF-bar"]}>
                    <div className={styles["detail-mbti-graph-TF-bar-percent"]}></div>
                  </div>
                  <div className={styles["detail-mbti-graph-alphabat-box"]}>
                    <span className={styles["detail-mbti-graph-alphabat"]}>F</span>
                    <span className={styles["detail-mbti-graph-text"]}>감정</span>
                  </div>
                </div>

                <div className={styles["detail-mbti-graph-inner-container"]}>
                  <div className={styles["detail-mbti-graph-alphabat-box"]}>
                    <span className={styles["detail-mbti-graph-alphabat"]}>P</span>
                    <span className={styles["detail-mbti-graph-text"]}>탐색</span>
                  </div>
                  <div className={styles["detail-mbti-graph-PJ-bar"]}>
                    <div className={styles["detail-mbti-graph-PJ-bar-percent"]}></div>
                  </div>
                  <div className={styles["detail-mbti-graph-alphabat-box"]}>
                    <span className={styles["detail-mbti-graph-alphabat"]}>J</span>
                    <span className={styles["detail-mbti-graph-text"]}>계획</span>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles["detail-review-container"]}>
              <div className={styles["detail-review-inner-container"]}>
                <img src={ReviewIcon} alt="리뷰 아이콘" style={{width: "25px", height: "25px", position: "absolute", top: "3px"}} />
                <span className={styles["detail-review-title"]}>리뷰 ({item.length})</span>

                <div className={styles["detail-review-box-container"]}>
                  <div className={styles["detail-review-input-box"]}>
                    <div className={styles["detail-review-input-box-change-img-box"]}>
                      <img src={Image} alt="리뷰 사진" className={styles["detail-review-input-change-img"]} />
                      <label className={styles["detail-review-input-change-img-add-img"]} htmlFor="input-file">
                        <span className={Image === DefaultImg ? styles["detail-review-input-change-img-add-img-icon"] : styles["detail-review-input-change-img-add-img-icon-setImg"]}>
                          블로그 이미지 찾아보기
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          id="input-file"
                          className={styles["detail-review-input-change-img-add-img-input"]}
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
                        className={styles["detail-review-input-change-img-delete"]}
                        onClick={() => {
                          window.confirm("이미지를 삭제하겠습니까?") ? setImage(DefaultImg) : null;
                        }}
                      >
                        {Image === DefaultImg ? null : <img src={DeleteImg} alt="이미지 삭제" className={styles["detail-review-input-change-img-delete-img"]} />}
                      </button>
                    </div>

                    <input
                      onKeyDown={handleOnKeyPress}
                      value={content || ""}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                      className={styles["detail-review-input"]}
                      type="text"
                      id="review"
                      name="review"
                      minLength="2"
                      maxLength="39"
                      size="10"
                      placeholder="리뷰를 작성해주세요..."
                    ></input>
                    <button onClick={handleSubmit} className={styles["detail-review-input-button"]} src={Submit} type="submit">
                      <img className={styles["detail-review-input-button-img"]} src={Submit} alt="제출 이미지" style={{width: "35px", height: "35px"}} />
                      <img className={styles["detail-review-input-button-img-hover"]} src={SubmitHover} alt="제출 hover 이미지" style={{width: "35px", height: "35px"}} />
                    </button>
                  </div>

                  {item.map((review) => (
                    <Review key={review.id} {...review} />
                  ))}
                </div>
              </div>
            </section>

            <section className={styles["detail-more-container"]}>
              <div className={styles["detail-more-inner-container"]}>
                <img src={Magnifier} alt="더보기 아이콘" style={{width: "25px", height: "25px", position: "absolute", top: "1px"}} />
                <span className={styles["detail-more-title"]}>더보기</span>
              </div>
              <a href={props.DetailItemsMenuData.place_url} className={styles["detail-more"]}>
                {props.DetailItemsMenuData.place_url}
              </a>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
