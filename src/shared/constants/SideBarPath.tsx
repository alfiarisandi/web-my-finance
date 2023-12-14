import { IMenuTypes } from '@interfaces/menuTypes';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  DatabaseIcon,
  GanttChartSquare,
  LayoutDashboard,
} from 'lucide-react';

const className = 'h-5 w-5 group-hover/item:text-custom_light';

const menuItems: IMenuTypes[] = [
  {
    url: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard className={className} />,
  },
  {
    url: 'data',
    label: 'Data',
    icon: <DatabaseIcon className={className} />,
    child: [
      {
        url: 'data/income',
        label: 'Income / Pendapatan',
        icon: <ArrowDownCircle className={className} />,
      },
      {
        url: 'data/outcome',
        label: 'Outcome / Pengeluaran',
        icon: <ArrowUpCircle className={className} />,
      },
      {
        url: 'data/anggaran',
        label: 'Anggaran',
        icon: <GanttChartSquare className={className} />,
      },
    ],
  },
];

export default menuItems;
