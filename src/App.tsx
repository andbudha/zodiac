import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import Signs from './components/Signs/Signs';
import Details from './components/Details/Details';
import { DataProvider } from './context/DataContext';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <DataProvider>
            {' '}
            <Layout />
          </DataProvider>
        }
      >
        <Route index element={<Home />} />
        <Route path="signs" element={<Signs />} />
        <Route path="details" element={<Details />} />
      </Route>
    )
  );
  return (
    <div className={styles.main_app_box}>
      <RouterProvider router={router} />
    </div>
  );
};
