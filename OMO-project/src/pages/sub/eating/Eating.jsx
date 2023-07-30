import styles from "./../../main/Main.module.css";
import {SubCategoryBox} from "./../../../components/SubCategoryBox/SubCategoryBox";
import {eating} from "./../../../const/eating";
import { Search } from "../../../components/Search/Search";

function Eating() {
  return (
    <div>
      < Search />
      <div className={styles["main-category-container"]}>
        {eating.map((el) => {
          return <SubCategoryBox key={el.id} title={el.title} img={el.src} />;
        })}
      </div>
    </div>
  );
}

export default Eating;
