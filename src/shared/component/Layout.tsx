import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
export default function Layout() {
  return (
    <div className="h-screen bg-gradient-to-bl from-custom_light_blue from-40% to-custom_pink_2 flex p-5">
      <Sidebar />

      <div className=" bg-white/20 rounded-r-xl backdrop-blur-[2px] border-r border-y border-white/50 flex flex-1 pl-5 pr-3 py-3 relative flex-col gap-3">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
