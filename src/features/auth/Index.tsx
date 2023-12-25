import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <div className="h-screen bg-gradient-to-bl from-custom_light_blue from-40% to-custom_pink_2 flex p-5 flx justify-center items-center">
      <Outlet />
    </div>
  );
}
