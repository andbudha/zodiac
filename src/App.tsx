import styles from "./App.module.scss";
import Details from "./components/Details/Details";

export const App = () => {
  return (
    <div className={styles.main_app_box}>
      <h1>Zodiac Project</h1>
      <Details />
    </div>
  );
};
