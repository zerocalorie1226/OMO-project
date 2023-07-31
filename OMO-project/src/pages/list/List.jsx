import styles from "./List.module.css";
import Filter from "../../components/Fliter/Filter";
import ListSearch from "../../components/ListSearch/ListSearch";

const List = () => (
  <>
    <div className={styles["list-component-container"]}>
      <Filter />
      <ListSearch />
    </div>
    <div className={styles["list-list-container"]}></div>
  </>
);

export default List;
