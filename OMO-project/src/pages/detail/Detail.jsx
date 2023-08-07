import styles from "./Detail.module.css";
import {data} from "../../const/data";
import {DetailItems} from "../../components/DetailItems/DetailItems";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";

const Detail = () => (
  <>
    <section className={styles["detail-container"]}>
      {data.map((el) => {
        return (
          <DetailItems
            key={el.id}
            title={el.title}
            like={el.like}
            jjim={el.jjim}
            addressBrief={el.addressBrief}
            addressStreet={el.addressStreet}
            addressNumber={el.addressNumber}
            time={el.time}
            holiday={el.holiday}
            runTime={el.runTime}
            menu={el.menu}
            call={el.call}
            googleMap={el.googleMap}
            intro={el.intro}
            img1={el.src1}
            img2={el.src2}
          />
        );
      })}
    </section>
    <ScrollToTop />
  </>
);

export default Detail;
