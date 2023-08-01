import styles from "./ScrollToTop.module.css";
import { TopButton } from './../../components/ScrollToTop/TopButton/TopButton';



export const ScrollToTop = ({ handleClick }) => (
    <>
    <div className={styles["position-container"]}>
      <TopButton onClick={handleClick}></TopButton>
      </div>
    </>
  );

