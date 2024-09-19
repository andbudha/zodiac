import FlipCard from "./FlipCard/FlipCard";
import styles from "./Signs.module.scss";
import { NavLink } from "react-router-dom";

const Signs = () => {
  return (
    <div className={styles.container}>
      <h1>Sign Pages</h1>
      <div className={styles.flip_box}>
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </div>

      <NavLink to={"/details"}>Details</NavLink>
    </div>
  );
};

export default Signs;
