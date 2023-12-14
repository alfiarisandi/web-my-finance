import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './router.tsx';
import { store } from '@redux/store.ts';

import { ThemeProvider } from '@material-tailwind/react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
        />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
