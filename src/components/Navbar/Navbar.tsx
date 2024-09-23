import styles from './Navbar.module.scss';
import logo from '../../assets/images/logo.png';
import { NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.main_navbar_box}>
      <NavLink to={'/'} className={styles.logo_box}>
        <img src={logo} alt="logo_image" className={styles.logo} />
      </NavLink>
      <div className={styles.links_box}>
        <div
          className={`${styles.link_box} ${
            pathname === '/' && styles.active_link_box
          }`}
        >
          <NavLink to={'/'} className={styles.link}>
            home
          </NavLink>
        </div>
        <div
          className={`${styles.link_box} ${
            pathname === '/signs' && styles.active_link_box
          }`}
        >
          <NavLink to={'/signs'} className={styles.link}>
            signs
          </NavLink>
        </div>
      </div>
    </div>
  );
};
