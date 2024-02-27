import styles from "./DetailMenu.module.css";
import { data } from "../../../const/data";
import { DetailItemsMenu } from "../../../components/DetailItems/DetailItemsMenu/DetailItemsMenu";
import { ScrollToTop } from "../../../components/ScrollToTop/ScrollToTop";
import { useParams } from 'react-router-dom';

const DetailMenu = ({ jjimData, setJjimData }) => {

  const { id } = useParams();

  const targetData = data.find(
    (it) => parseInt(it.id) === parseInt(id)
  );

  // jjimData 상태를 업데이트하는 함수 
  const updateJjimData = (newData) => {
    // handleClickJjim이 true일 때만 targetData를 포함하는 jjimData 배열 필터링
    const updatedData = newData ? [targetData, ...jjimData.filter((jjimItem) => jjimItem.id !== targetData.id)] : [];
    console.log("업데이트: ", updatedData);
    // 필터링된 배열로 jjimData 상태 업데이트
    setJjimData(updatedData);
  };

  console.log("업데이트 후 상태", jjimData);
  return (
    <>
      <section className={styles["detail-container"]}>
        <DetailItemsMenu data={targetData} updateJjimData={updateJjimData} />
      </section>
      <ScrollToTop />
    </>
  );
};

export default DetailMenu;
