import styles from "./Main.module.css";
import {CategoryBox} from "../../components/CategoryBox/CategoryBox";
import {main} from "./../../const/main";

function Main() {
  return (
    <div>
      <div className={styles["main-category-container"]}>
        {main.map((el) => {
          return <CategoryBox key={el.id} title={el.title} img={el.src} />;
        })}
      </div>
    </div>

  

  );
}

export default Main;
