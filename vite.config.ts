import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: path.resolve(__dirname, 'src/app'),
      },
      {
        find: '@features',
        replacement: path.resolve(__dirname, 'src/features'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@api',
        replacement: path.resolve(__dirname, 'src/shared/api'),
      },
      {
        find: '@component',
        replacement: path.resolve(__dirname, 'src/shared/component'),
      },
      {
        find: '@interfaces',
        replacement: path.resolve(__dirname, 'src/shared/interfaces'),
      },
      {
        find: '@redux',
        replacement: path.resolve(__dirname, 'src/shared/redux'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/shared/utils'),
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/shared/constants'),
      },
    ],
  },
});
