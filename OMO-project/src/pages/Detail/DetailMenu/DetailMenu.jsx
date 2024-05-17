import styles from "./DetailMenu.module.css";
import { data } from "../../../const/data";
import { DetailItemsMenu } from "../../../components/DetailItems/DetailItemsMenu/DetailItemsMenu";
import { ScrollToTop } from "../../../components/ScrollToTop/ScrollToTop";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const DetailMenu = ({ jjimData, setJjimData, likeData, setLikeData,defaultListImg,setDefaultListImg }) => {

  const { id, place_name } = useParams();

  console.log(id);
  console.log(place_name);

  const [DetailItemsMenuData, setDetailItemsMenuData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/place/${place_name}`, {
          headers: {
            placeId: id,
          },
        });
        console.log(response.data);
        setDetailItemsMenuData(response.data); // 서버로부터 받은 데이터를 상태에 저장
      } catch (error) {
        console.error("에러야", error);
      }
    };

    fetchData();
  }, []); // category가 변경될 때마다 데이터를 새로 가져옵니다

  // const targetData = data.find(
  //   (it) => parseInt(it.id) === parseInt(id)
  // );

  // jjimData 상태를 업데이트하는 함수 
  const updateJjimData = (newJjimData) => {
    // handleClickJjim이 true일 때만 targetData를 포함하는 jjimData 배열 필터링
    const updatedJjim = newJjimData ? [DetailItemsMenuData, ...jjimData.filter((jjimItem) => jjimItem.id !== DetailItemsMenuData.id)] : jjimData.filter((jjimItem) => jjimItem.id !== DetailItemsMenuData.id);
    // 필터링된 배열로 jjimData 상태 업데이트
    setJjimData(updatedJjim);
  };



  // likeData 상태를 업데이트하는 함수 
  const updateLikeData = (newLikeData) => {
    const updatedLike = newLikeData ? [DetailItemsMenuData, ...likeData.filter((likeItem) => likeItem.id !== DetailItemsMenuData.id)] : likeData.filter((likeItem) => likeItem.id !== targetData.id);
    // console.log("업데이트: ", updatedLike);
    setLikeData(updatedLike);
  };
  console.log("따봉 목록 배열", likeData);

  return (
    <>
      <section className={styles["detail-container"]}>
        <DetailItemsMenu DetailItemsMenuData={DetailItemsMenuData} updateJjimData={updateJjimData} updateLikeData={updateLikeData} defaultListImg={defaultListImg} setDefaultListImg={setDefaultListImg}/>
      </section>
      <ScrollToTop />
    </>
  );
};

export default DetailMenu;
