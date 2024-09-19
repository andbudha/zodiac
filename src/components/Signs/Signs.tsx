import { useContext } from "react";
import styles from "./Signs.module.scss";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const Signs = () => {
  const { signs } = useContext(DataContext);

  return (
    <div className={styles.container}>
      <div className={styles.flip_box}>
        {signs &&
          signs.map((data, index) => {
            return (
              <div className={styles.flip_card} key={index}>
                <div className={styles.flip_card_inner}>
                  <div className={styles.flip_card_front}>
                    <img className={styles.image} src={data.image} alt={data.name} />
                  </div>
                  <div className={styles.flip_card_back}>
                    <h1>
                      <NavLink to={`${data.id}`}> {data.name} </NavLink>
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Signs;
