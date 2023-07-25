import styles from "./Main.module.css";
import {CategoryBox} from "../../components/CategoryBox/CategoryBox";
import {main} from "./../../const/main";
import {Header} from "../../components/Header/header";
import {Search} from "../../components/Search/Search";

function Main() {
  return (
    <div>
      <Header />
      <Search />
      <div className={styles["main-category-container"]}>
        {main.map((el) => {
          return <CategoryBox key={el.id} title={el.title} img={el.src} />;
        })}
      </div>
    </div>

  

  );
}

export default Main;