import Login from '@pages/auth/login/Login';
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
    path: '',
    element: <Login />,
  },
]);
