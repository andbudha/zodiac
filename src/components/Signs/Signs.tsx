import styles from "./Signs.module.scss";
import { NavLink } from "react-router-dom";

const Signs = () => {
  return (
    <div className={styles.container}>
      <h1>Sign Pages</h1>

      <div className={styles.flip_card}>
        <div className={styles.flip_card_inner}>
          <div className={styles.flip_card_front}>
            <img src="img_avatar.png" alt="Avatar" />
          </div>
          <div className={styles.flip_card_back}>
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <NavLink to={"/details"}>Details</NavLink>
    </div>
  );
};

export default Signs;
