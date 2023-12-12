import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './router.tsx';
import { store } from '@redux/store.ts';

import { ThemeProvider } from '@material-tailwind/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
