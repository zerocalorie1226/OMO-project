import styles from "./../../main/Main.module.css";
import {SubCategoryBox} from "./../../../components/SubCategoryBox/SubCategoryBox";
import {playing} from "./../../../const/playing";
import { Search } from "../../../components/Search/Search";

function Playing() {
  return (
    <div>
      < Search />
      <div className={styles["main-category-container"]}>
        {playing.map((el) => {
          return <SubCategoryBox key={el.id} title={el.title} img={el.src} />;
        })}
      </div>
    </div>
  );
}

export default Playing;
