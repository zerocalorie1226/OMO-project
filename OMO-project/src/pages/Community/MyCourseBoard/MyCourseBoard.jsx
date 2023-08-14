import styles from "./MyCourseBoard.module.css";
import Filter from "../../../components/Filter/Filter";
import { CommunityCategory } from './../../../components/CommunityCategory/CommunityCategory';
// import {ScrollToTop} from "../../components/ScrollToTop/ScrollToTop";
import ListSearch from './../../../components/ListSearch/ListSearch';
import { communityPageFilter } from './../../../const/communityPageFilter';

const MyCourseBoard = () => (
  <>
  <CommunityCategory />
  <div className={styles["community-component-container"]}>
      <div className={styles["community-filter-container"]}>
        {communityPageFilter.map((el) => {
          return <Filter key={el.id} title={el.title} bar={el.bar} />;
        })}
      </div>
      <ListSearch />
    </div>

  <section  className={styles["community-mycourse-container"]}></section>
  
  {/* <ScrollToTop /> */}
  </>
);

export default MyCourseBoard;
