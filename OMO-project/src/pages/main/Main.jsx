import styles from "./Main.module.css";
import {CategoryBox} from "../../components/CategoryBox/CategoryBox";
import {main} from "./../../const/main";
import { Search } from '../../components/Search/Search';
import { Weather } from '../../components/Weather/Weather';



function Main() {
  return (
    <div>
      <Search />
      <Weather />
      <div className={styles["main-category-container"]}>
        {main.map((el) => {
          return <CategoryBox key={el.id} title={el.title} img={el.src} />;
        })}
      </div>
    </div>

  

  );
}

export default Main;