import Layout from '@component/Layout';
import Index from '@features/auth/Index';
import Login from '@pages/auth/login/Login';
import Dashboard from '@pages/dashboard/Dashboard';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: '*',
    element: <Root />,
  },
  {
    path: 'auth',
    element: <Index />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'data',
        element: <Root />,
        children: [
          {
            path: 'income',
            element: <Root />,
          },
        ],
      },
    ],
  },
]);
