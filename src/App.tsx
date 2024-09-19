import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signs" element={'signs component'} />
      </Route>
    )
  );
  return (
    <div className={styles.main_app_box}>
      <RouterProvider router={router} />
    </div>
  );
};
