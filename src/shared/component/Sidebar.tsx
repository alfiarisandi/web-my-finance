import menuItems from '@constants/SideBarPath';
import { IMenuTypes } from '@interfaces/menuTypes';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import { ChevronDownIcon, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ButonSidebar = ({ url, icon, label }: IMenuTypes) => {
  const pathname = useLocation().pathname;
  const selected = pathname.includes(url);
  return (
    <Link to={url} className="outline-none bg-transparent ">
      <ListItem
        placeholder={''}
        className={`w-[11em] focus:bg-transparent active:bg-transparent px-3 py-2 hover:bg-gradient-to-r from-custom_blue to-custom_pink_2 rounded-lg group/item hover:text-custom_light group/item ${
          selected &&
          'bg-gradient-to-r from-custom_blue to-custom_pink_2 text-custom_light'
        }`}
      >
        <ListItemPrefix
          placeholder={''}
          className={`${selected && ' text-custom_light'}`}
        >
          {icon}
        </ListItemPrefix>
        <Typography
          placeholder={''}
          variant="small"
          className={`font-normal group-hover/item:text-custom_light ${
            selected && 'text-custom_light'
          }`}
        >
          {label}
        </Typography>
      </ListItem>
    </Link>
  );
};

const AccordianMenu = ({
  open,
  openHandler,
  i,
  items,
}: {
  open: number;
  openHandler: any;
  i: number;
  items: IMenuTypes;
}) => {
  return (
    <Accordion
      placeholder={''}
      open={open === i}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-all ease-in-out group-hover/item:text-custom_light ${
            open === 1 ? 'rotate-180' : ''
          }`}
        />
      }
      className="w-[11em]"
    >
      <ListItem placeholder={''} className="p-0" selected={open === i}>
        <AccordionHeader
          placeholder={''}
          onClick={() => openHandler(i)}
          className="w-[11em] focus:bg-transparent active:bg-transparent outline-none border-b-0 px-3 py-2 hover:bg-gradient-to-r from-custom_blue to-custom_pink_2 rounded-lg bg-transparent group/item"
        >
          <ListItemPrefix placeholder={''}>{items.icon}</ListItemPrefix>
          <Typography
            placeholder={''}
            variant="small"
            className="mr-auto font-normal group-hover/item:text-custom_light"
          >
            {items.label}
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List placeholder={''} className="p-0">
          {items.child?.map((item, i) => (
            <ButonSidebar key={i} {...item} />
          ))}
        </List>
      </AccordionBody>
    </Accordion>
  );
};

const ListOpen = ({ open, handleOpen }: { open: number; handleOpen: any }) => {
  return (
    <List placeholder={''} className="min-w-0">
      {menuItems.map((item, i) =>
        item?.devider ? (
          <hr className="my-2 border-blue-gray-50" key={i} />
        ) : item.child ? (
          <AccordianMenu
            open={open}
            openHandler={handleOpen}
            key={i}
            i={i}
            items={item}
          />
        ) : (
          <ButonSidebar key={i} {...item} />
        )
      )}
    </List>
  );
};

export default function Sidebar() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div
      className={`flex flex-col h-full justify-between items-center w-[12rem] p-2 bg-white/50 rounded-l-xl backdrop-blur-[2px] border-l border-y border-white/50 z-20`}
    >
      <div
        className={`mb-2 p-4 flex flex-col gap-6 w-fit
        `}
      >
        <Typography
          placeholder={''}
          variant="h4"
          color="white"
          className={`transition-all ease-in-out delay-75 duration-500 self-start px-4`}
        >
          My Finance
        </Typography>

        <ListOpen open={open} handleOpen={handleOpen} />
      </div>

      <div className="mb-4 px-4 self-start w-full">
        <div className="flex gap-3 py-3 px-2 bg-white/20 backdrop-blur-[1px] rounded-xl items-center">
          <LogOut className="text-custom_pink_2" />
          <Typography
            placeholder={''}
            className="font-normal text-custom_gray"
            variant="small"
          >
            Logout
          </Typography>
        </div>
      </div>
    </div>
  );
}
