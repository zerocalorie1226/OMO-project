import styles from "./List.module.css";
import Filter from "../../components/Fliter/Filter";
import ListSearch from "../../components/ListSearch/ListSearch";
import {data} from "./../../const/data";
import { ListBox } from './../../components/ListBox/ListBox';
import { useState, useEffect } from 'react'
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";


function List() {

  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return(
  <>
    <div className={styles["list-component-container"]}>
      <Filter />
      <ListSearch />
    </div>
    <section className={styles["list-list-container"]}>
      <div  className={styles["list-list-box-container"]}>
    {data.map((el) => {
        return <ListBox key={el.id} title={el.title} like={el.like} jjim={el.jjim} runTime={el.runTime} intro={el.intro} addressBrief={el.addressBrief}  img1={el.src1} img2={el.src2}/>;
      })}
      </div>
    </section>
    <ScrollToTop/>

  </>
);
    }

export default List;

