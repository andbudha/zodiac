import styles from './Navbar.module.scss';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={styles.main_navbar_box}>
      <NavLink to={'/'} className={styles.logo_box}>
        <img src={logo} alt="logo_image" className={styles.logo} />
      </NavLink>
      <div className={styles.links_box}>
        <NavLink to={'/'} className={styles.link}>
          home
        </NavLink>
        <NavLink to={'/signs'} className={styles.link}>
          signs
        </NavLink>
      </div>
    </div>
  );
};
