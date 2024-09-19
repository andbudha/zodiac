import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.main_footer_box}>
      <div className={styles.links_box}>
        <NavLink to={'/'} className={styles.link}>
          home
        </NavLink>
        <NavLink to={'/signs'} className={styles.link}>
          signs
        </NavLink>
      </div>
      <div className={styles.info_box}>
        <p>&copy; Copyright 2024, ZODIAC</p>
      </div>
    </div>
  );
};
