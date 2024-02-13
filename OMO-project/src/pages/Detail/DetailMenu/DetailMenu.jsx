import styles from "./DetailMenu.module.css";
import {data} from "../../../const/data";
import {DetailItemsMenu} from "../../../components/DetailItems/DetailItemsMenu/DetailItemsMenu";
import {ScrollToTop} from "../../../components/ScrollToTop/ScrollToTop";
import {  useParams } from 'react-router-dom';

const DetailMenu = () => {

  const {id} = useParams();



  const targetData = data.find(
    (it) => parseInt(it.id) === parseInt(id)
  );



  return (
    <>
      <section className={styles["detail-container"]}>
        <DetailItemsMenu data={targetData} />
      </section>
      <ScrollToTop />
    </>
  );
};

export default DetailMenu;
