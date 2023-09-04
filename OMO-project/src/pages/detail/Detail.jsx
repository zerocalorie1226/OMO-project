import styles from "./Detail.module.css";
import {data} from "../../const/data";
import {DetailItems} from "../../components/DetailItems/DetailItems";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";

const Detail = () => {
  const storeItem = data.find((item) => item.id === 1);
  return (
    <>
      <section className={styles["detail-container"]}>
        <DetailItems key={storeItem.id} data={storeItem} />
      </section>
      <ScrollToTop />
    </>
  );
};

export default Detail;
