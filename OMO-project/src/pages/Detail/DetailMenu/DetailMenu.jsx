import styles from "./DetailMenu.module.css";
import { DetailItemsMenu } from "../../../components/DetailItems/DetailItemsMenu/DetailItemsMenu";
import { ScrollToTop } from "../../../components/ScrollToTop/ScrollToTop";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const DetailMenu = ({ setDefaultListImg }) => {

  const { id, place_name } = useParams();


  const [DetailItemsMenuData, setDetailItemsMenuData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.oneulmohae.co.kr/place/${place_name}`, {
          headers: {
            placeId: id,
          },
        });
        setDetailItemsMenuData(response.data); // 서버로부터 받은 데이터를 상태에 저장
      } catch (error) {
        console.error("에러야", error);
      }
    };

    fetchData();
  }, []); // category가 변경될 때마다 데이터를 새로 가져옵니다



  return (
    <>
      <section className={styles["detail-container"]}>
        <DetailItemsMenu DetailItemsMenuData={DetailItemsMenuData} setDefaultListImg={setDefaultListImg} place_name={place_name} placeId={id}/>
      </section>
      <ScrollToTop />
    </>
  );
};

export default DetailMenu;
