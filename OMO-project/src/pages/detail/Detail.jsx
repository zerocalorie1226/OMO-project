import styles from "./Detail.module.css";
import Thumbnail from "../../assets/detail/thumbnail.png"
import Jjim from "../../assets/detail/empty-heart.png"
import JjimClicked from "../../assets/detail/red-heart.png"
import Like from "../../assets/detail/empty-thumb.png"
import LikeClicked from "../../assets/detail/yellow-thumb.png"
import SalesInfo from "../../assets/detail/sales-info.png"
import Menu from "../../assets/detail/menu.png"
import Call from "../../assets/detail/call.png"
import GoogleMap from "../../assets/detail/google-map.png"
import Graph from "../../assets/detail/graph.png"
import Review from "../../assets/detail/review.png"
import ProfileImg from "../../assets/profile-img.jpg"




export const Detail = (props) => (
  <>
    <section className={styles["detail-container"]}>
      
    {/* 타이틀 */}
    <div className={styles["detail-title-container"]}>
    <div className={styles["detail-thumbnail-container"]}><img src={Thumbnail} alt="썸네일 이미지" /></div>
    <span className={styles["detail-title"]}>{props.title}</span>
    <div className={styles["detail-like"]}> <img src={Like} alt="좋아요 아이콘"/> <span className={styles["detail-like-number"]}> {props.like}</span></div>
    <span  className={styles["detail-like-jjim-line"]}>|</span>
    <div className={styles["detail-jjim"]}> <img src={Jjim} alt="찜 아이콘"/> <span className={styles["detail-jjim-number"]}> {props.jjim}</span></div>
    <div className={styles["detail-inner-container"]}>


     {/* 주소 */}
    <section className={styles["detail-address-container"]}>
      <div  className={styles["detail-address-inner-container"]} >
        <img src={Address} alt="주소 아이콘" /><span className={styles["detail-address-title"]}>주소</span></div>
        <span className={styles["detail-address-info-street"]}>{props.addressStreet}</span>
        <span className={styles["detail-address-info-number"]}>{props.addressNumber}</span>
    </section>

     {/* 영업정보 */}
    <section className={styles["detail-sales-info-container"]}>
      <div  className={styles["detail-sales-info-inner-container"]} >
        <img src={SalesInfo} alt="영업정보 아이콘" /><span className={styles["detail-sales-info-title"]}>주소</span></div>
        <span className={styles["detail-sales-info-time"]}>시간</span> <span className={styles["detail-sales-info-line"]}>|</span><span className={styles["detail-sales-info-time-info"]}>{props.time}</span>
        <span className={styles["detail-sales-info-holiday"]}>휴무</span> <span className={styles["detail-sales-info-line"]}>|</span><span  className={styles["detail-sales-info-holiday-info"]}>{props.holiday}</span>
    </section>

      {/* 메뉴 */}
    <section className={styles["detail-menu-container"]}>
      <div  className={styles["detail-menu-inner-container"]} >
        <img src={Menu} alt="메뉴 아이콘" /><span className={styles["detail-menu-title"]}>메뉴</span></div>
        <span className={styles["detail-menu-list"]}>{props.menu}</span>
        {/* 메뉴 추후에 <ul> <li>로 수정 필요함 -> 아마 배열로 받아올듯 */}
    </section>

    {/* 전화 */}
    <section className={styles["detail-call-container"]}>
      <div  className={styles["detail-call-inner-container"]} >
        <img src={Call} alt="전화 아이콘" /><span className={styles["detail-call-title"]}>전화</span></div>
        <span className={styles["detail-call"]}>{props.call}</span>
    </section>


    {/* 구글맵 */}
    <section className={styles["detail-google-map-container"]}>
      <div  className={styles["detail-google-map-inner-container"]} >
        <img src={GoogleMap} alt="구글맵 이미지" />
      </div>
    </section>

    {/* MBTI 별 통계 */}
    <section className={styles["detail-mbti-stats-container"]}>
      <div  className={styles["detail-mbti-stats-inner-container"]} >

        <img src={Graph} alt="통계 아이콘" /><span className={styles["detail-mbti-stats-title"]}>MBTI별 통계</span></div>

        <div className={styles["detail-mbti-graph-container"]}>
        
        <div className={styles["detail-mbti-graph-EI-container"]}>
        <div className={styles["detail-mbti-graph-E-container"]}><span className={styles["detail-mbti-graph-E"]}>E</span><span  className={styles["detail-mbti-graph-E-extra"]}>외향</span></div>
        <div className={styles["detail-mbti-graph-EI-bar"]}><div className={styles["detail-mbti-graph-EI-bar-percent"]}></div></div>
        <div className={styles["detail-mbti-graph-I-container"]}><span className={styles["detail-mbti-graph-I"]}>I</span><span  className={styles["detail-mbti-graph-I-intro"]}>내향</span></div>
        </div>

        <div className={styles["detail-mbti-graph-SN-container"]}>
        <div className={styles["detail-mbti-graph-S-container"]}><span className={styles["detail-mbti-graph-S"]}>S</span><span  className={styles["detail-mbti-graph-sens"]}>현실</span></div>
        <div className={styles["detail-mbti-graph-SN-bar"]}><div className={styles["detail-mbti-graph-SN-bar-percent"]}></div></div>
        <div className={styles["detail-mbti-graph-N-container"]}><span className={styles["detail-mbti-graph-N"]}>N</span><span  className={styles["detail-mbti-graph-intu"]}>직관</span></div>
        </div>


        <div className={styles["detail-mbti-graph-TF-container"]}>
        <div className={styles["detail-mbti-graph-T-container"]}><span className={styles["detail-mbti-graph-T"]}>T</span><span  className={styles["detail-mbti-graph-T-think"]}>사고</span></div>
        <div className={styles["detail-mbti-graph-TF-bar"]}><div className={styles["detail-mbti-graph-TF-bar-percent"]}></div></div>
        <div className={styles["detail-mbti-graph-F-container"]}><span className={styles["detail-mbti-graph-F"]}>F</span><span  className={styles["detail-mbti-graph-F-feel"]}>감정</span></div>
        </div>


        <div className={styles["detail-mbti-graph-PJ-container"]}>
        <div className={styles["detail-mbti-graph-P-container"]}><span className={styles["detail-mbti-graph-P"]}>P</span><span  className={styles["detail-mbti-graph-P-extra"]}>탐색</span></div>
        <div className={styles["detail-mbti-graph-PJ-bar"]}><div className={styles["detail-mbti-graph-PJ-bar-percent"]}></div></div>
        <div className={styles["detail-mbti-graph-J-container"]}><span className={styles["detail-mbti-graph-J"]}>J</span><span  className={styles["detail-mbti-graph-J-intro"]}>계획</span></div>
        </div>

        
        </div>
   
    </section>

    {/* 리뷰 */}
    <section className={styles["detail-review-container"]}>
      <div  className={styles["detail-review-inner-container"]} >
        <img src={Review} alt="리뷰 아이콘" /><span className={styles["detail-review-title"]}>리뷰</span></div>
    
        <div className={styles["detail-review-box-container"]}>
        <div className={styles["detail-review-box"]}><img src={ProfileImg} alt="프로필 이미지" /><span className={styles["detail-review-profile-name"]} >이니</span><span className={styles["detail-review-date"]}>2023/07/03</span><span className={styles["detail-review-content"]}>마쉬써요</span></div>
        <div className={styles["detail-review-box"]}><img src={ProfileImg} alt="프로필 이미지" /><span className={styles["detail-review-profile-name"]} >이니</span><span className={styles["detail-review-date"]}>2023/07/03</span><span className={styles["detail-review-content"]}>마쉬써요</span></div>
        <div className={styles["detail-review-box"]}><img src={ProfileImg} alt="프로필 이미지" /><span className={styles["detail-review-profile-name"]} >이니</span><span className={styles["detail-review-date"]}>2023/07/03</span><span className={styles["detail-review-content"]}>마쉬써요</span></div>
        <div className={styles["detail-review-box"]}><img src={ProfileImg} alt="프로필 이미지" /><span className={styles["detail-review-profile-name"]} >이니</span><span className={styles["detail-review-date"]}>2023/07/03</span><span className={styles["detail-review-content"]}>마쉬써요</span></div>
        </div>


    </section>

      
    </div>
      </div>




    
    <span className={styles["list-box-title"]}>{props.title}</span>
    <div className={styles["list-box-like"]}> <img src={Like} alt="좋아요"/> <span className={styles["list-box-like-number"]}> {props.like}</span></div>
    <div className={styles["list-box-jjim"]}> <img src={Jjim} alt="찜"/> <span className={styles["list-box-jjim-number"]}> {props.jjim}</span></div>
    <span className={styles["list-box-runtime"]}>{props.runTime}</span>
    <span className={styles["list-box-intro"]}>{props.intro}</span>
    <span className={styles["list-box-address-brief"]}>{props.addressBrief}</span>
    <img className={styles["sub-category-box-img1"]} src={props.img1} />
    <img className={styles["sub-category-box-img2"]} src={props.img2} />
    </section>
  </>
);
