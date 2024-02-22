import styles from "../../main/Main.module.css";
import {SubCategoryBox} from "../../../components/SubCategoryBox/SubCategoryBox";
import {themeCafe} from "../../../const/themeCafe";
import Search from "../../../components/Search/Search";

const ThemeCafe = () => (
  <>
    <Search />
    <div className={styles["main-category-container"]}>
      {themeCafe.map((el) => {
        return <SubCategoryBox key={el.id} {...el} />;
      })}
    </div>
  </>
);

export default ThemeCafe;
