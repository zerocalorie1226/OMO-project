import styles from "./List.module.css";
import Filter from "../../components/Filter/Filter";
import ListSearch from "../../components/ListSearch/ListSearch";
import {data} from "../../const/data";
import {listPageFilter} from "../../const/listPageFilter";
import {ListBox} from "../../components/ListBox/ListBox";
import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";

const List = () => (
  <>
    <div className={styles["list-component-container"]}>
      {/* <div className={styles["list-filter-container"]}>
        {listPageFilter.map((el) => {
          return <Filter key={el.id} {...el} />;
        })}
      </div> */}
      <ListSearch />
    </div>
    <section className={styles["list-list-container"]}>
      <div className={styles["list-list-box-container"]}>
        {data.map((el) => {
          return <ListBox key={el.id} {...el} />;
        })}
      </div>
    </section>
    <ScrollToTop />
  </>
);

export default List;
