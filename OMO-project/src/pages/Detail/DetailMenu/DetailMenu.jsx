import styles from "./DetailMenu.module.css";
import {data} from "../../../const/data";
import {DetailItemsMenu} from "../../../components/DetailItems/DetailItemsMenu/DetailItemsMenu";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {  useParams } from 'react-router-dom';

const DetailMenu = ({jjimData, setJjimData}) => {

  const {id} = useParams();


// console.log("디테일메뉴: ", data);
  const targetData = data.find(
    (it) => parseInt(it.id) === parseInt(id)
  );

    // jjimData 상태를 업데이트하는 함수 정의
    const updateJjimData = (newData) => {
      // handleClickJjim이 true일 때만 targetData를 포함하는 jjimData 배열 필터링
      const updatedData = newData ? [targetData] : [];
      // 필터링된 배열로 jjimData 상태 업데이트
      setJjimData(updatedData);
      console.log(updatedData);
    };

  return (
    <>
      <section className={styles["detail-container"]}>
        <DetailItemsMenu data={targetData}  updateJjimData={updateJjimData} />
      </section>
      <ScrollToTop />
    </>
  );
};

export default DetailMenu;
