import styles from "./../../main/Main.module.css";
import {SubCategoryBox} from "./../../../components/SubCategoryBox/SubCategoryBox";
import {watching} from "./../../../const/watching";
import { Search } from "../../../components/Search/Search";

function Watching() {
  return (
    <div>
      <Search />
      <div className={styles["main-category-container"]}>
        {watching.map((el) => {
          return <SubCategoryBox key={el.id} title={el.title} img={el.src} />;
        })}
      </div>
    </div>
  );
}

export default Watching;
