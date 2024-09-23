import { NavLink, useLocation } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.main_footer_box}>
      <div className={styles.links_box}>
        <NavLink
          to={'/'}
          className={`${styles.link} ${pathname === '/' && styles.active_link}`}
        >
          home
        </NavLink>
        <NavLink
          to={'/signs'}
          className={`${styles.link} ${
            pathname === '/signs' && styles.active_link
          }`}
        >
          signs
        </NavLink>
      </div>
      <div className={styles.info_box}>
        <p>&copy; Copyright 2024, ZODIAC</p>
      </div>
    </div>
  );
};
