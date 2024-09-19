import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import styles from './Layout.module.scss';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <div className={styles.main_layout_box}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
