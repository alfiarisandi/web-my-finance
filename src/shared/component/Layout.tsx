import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Button } from '@material-tailwind/react';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { useState } from 'react';
export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  return (
    <div className="h-screen bg-gradient-to-bl from-custom_light_blue from-40% to-custom_pink_2 flex p-5">
      <div className="relative p-2 bg-white/50 rounded-l-xl backdrop-blur-[2px] border-l border-y border-white/50 z-20">
        <Sidebar isActive={sidebarOpen} />
        <div className="absolute top-5 -right-5">
          <Button placeholder={''} className="bg-custom_light p-2">
            {sidebarOpen ? (
              <PanelLeftClose
                className="text-custom_gray"
                onClick={() => setSidebarOpen(false)}
              />
            ) : (
              <PanelLeftOpen
                className="text-custom_gray"
                onClick={() => setSidebarOpen(true)}
              />
            )}
          </Button>
        </div>
      </div>
      <div className=" bg-white/20 rounded-r-xl backdrop-blur-[2px] border-r border-y border-white/50 w-full">
        <Outlet />
      </div>
    </div>
  );
}
