import styles from "../../main/Main.module.css";
import {SubCategoryBox} from "../../../components/SubCategoryBox/SubCategoryBox";
import {watching} from "../../../const/watching";
import Search from "../../../components/Search/Search";

const Watching = () => (
  <>
    <Search />
    <div className={styles["main-category-container"]}>
      {watching.map((el) => {
        return <SubCategoryBox key={el.id} {...el} />;
      })}
    </div>
  </>
);

export default Watching;
