import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import styles from './Layout.module.scss';
import { Footer } from '../Footer/Footer';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';

export const Layout = () => {
  const { getData } = useContext(DataContext);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.main_layout_box}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
