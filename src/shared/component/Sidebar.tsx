import menuItems from '@constants/SideBarPath';
import { IMenuTypes } from '@interfaces/menuTypes';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  Collapse,
  List,
  ListItem,
  ListItemPrefix,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { ChevronDownIcon, UserCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ButonSidebar = ({ url, icon, label }: IMenuTypes) => {
  const pathname = useLocation().pathname;
  const selected = pathname.includes(url);
  return (
    <Link to={url} className="outline-none bg-transparent ">
      <ListItem
        placeholder={''}
        className={`focus:bg-transparent active:bg-transparent px-3 py-2 hover:bg-gradient-to-r from-custom_blue to-custom_pink_2 rounded-lg group/item hover:text-custom_light group/item ${
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
    >
      <ListItem placeholder={''} className="p-0" selected={open === i}>
        <AccordionHeader
          placeholder={''}
          onClick={() => openHandler(i)}
          className="focus:bg-transparent active:bg-transparent outline-none border-b-0 px-3 py-2 hover:bg-gradient-to-r from-custom_blue to-custom_pink_2 rounded-lg bg-transparent group/item"
        >
          <ListItemPrefix placeholder={''}>{items.icon}</ListItemPrefix>
          <Typography
            placeholder={''}
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

const CardProfileOpen = ({ className }: { className: string }) => {
  return (
    <Card
      placeholder={''}
      className={`p-3 bg-white flex flex-row items-center gap-3 whitespace-nowrap  transition-all ease-in-out delay-75 duration-500 w-full ${className}`}
    >
      <UserCircle2 className="w-8 h-8 rounded-full" />
      <div className={''}>
        <Typography variant="h6" placeholder={''}>
          Your Username
        </Typography>
        <Typography variant="small" placeholder={''}>
          Your Username
        </Typography>
      </div>
    </Card>
  );
};

const CardProfileClose = ({ className }: { className: string }) => {
  return (
    <Card
      placeholder={''}
      className={`p-3 bg-white flex flex-row items-center  ${className}`}
    >
      <UserCircle2 className="w-6 h-6 rounded-full" />
    </Card>
  );
};

const ListOpen = ({ open, handleOpen }: { open: number; handleOpen: any }) => {
  return (
    <List placeholder={''} className="">
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

const IconButtonSide = ({
  icon,
  url,
  label,
  onClick = () => {},
}: {
  icon: any;
  url: string;
  label: any;
  onClick?: any;
}) => {
  const pathname = useLocation().pathname;
  const selected = pathname.includes(url);
  return (
    <Tooltip content={label} placement="right">
      <Button
        placeholder={''}
        onClick={onClick}
        className={`focus:bg-transparent active:bg-transparent bg-transparent shadow-none hover:shadow-none p-3 hover:bg-gradient-to-r from-custom_blue to-custom_pink_2 rounded-lg group/item hover:text-custom_light  ${
          selected &&
          'bg-gradient-to-r from-custom_blue to-custom_pink_2 text-custom_light'
        }`}
      >
        {icon}
      </Button>
    </Tooltip>
  );
};

const ListClose = ({ open, handleOpen }: { open: number; handleOpen: any }) => {
  return (
    <div className="">
      {menuItems.map((item, i) =>
        item.child ? (
          <div className="my-1">
            <IconButtonSide
              icon={item.icon}
              url={item.url}
              label={item.label}
              onClick={() => handleOpen(i)}
            />

            <Collapse open={open === i} className="my-1" key={i}>
              <div className="flex flex-col gap-1">
                {item.child.map((items, i) => (
                  <Link to={items.url} key={i}>
                    <IconButtonSide
                      icon={items.icon}
                      url={items.url}
                      label={items.label}
                    />
                  </Link>
                ))}
              </div>
            </Collapse>
          </div>
        ) : (
          <Link to={item.url} key={i}>
            <IconButtonSide
              icon={item.icon}
              url={item.url}
              label={item.label}
            />
          </Link>
        )
      )}
    </div>
  );
};

export default function Sidebar({ isActive = true }: { isActive: boolean }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div
      className={`mb-2 p-4 flex flex-col gap-6 transition-all ease-in-out delay-75 duration-500 overflow-x-hidden ${
        isActive ? 'w-[18rem] p-4' : 'w-[3em] px-0 justify-center items-center'
      }`}
    >
      <Typography
        placeholder={''}
        variant="h4"
        color="white"
        className={`${
          !isActive && '-translate-x-80 '
        } transition-all ease-in-out delay-75 duration-500`}
      >
        My Finance
      </Typography>

      {isActive ? (
        <>
          <CardProfileOpen className="" />
          <ListOpen open={open} handleOpen={handleOpen} />
        </>
      ) : (
        <>
          <CardProfileClose className={``} />
          <ListClose open={open} handleOpen={handleOpen} />
        </>
      )}
    </div>
  );
}
