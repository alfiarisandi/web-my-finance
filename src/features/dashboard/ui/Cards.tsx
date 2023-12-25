import { Typography } from '@material-tailwind/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import randomColor from 'randomcolor';
import { BugetPlan } from '@interfaces/dashboardTypes';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Cards({
  data: datas,
}: {
  data: BugetPlan[] | undefined;
}) {
  const colors = datas?.map(() => randomColor());
  const data = {
    labels: datas?.map((item) => item.nama_anggaran),
    datasets: [
      {
        label: 'Jumlah Anggaran IDR ',
        data: datas?.map((item) => item.nilai_anggaran),
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  };

  const optionsCharts = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="flex flex-col gap-3 p-3 rounded-lg bg-white/30">
      <Typography
        placeholder={''}
        variant="paragraph"
        className="font-semibold"
      >
        Buget Plan
      </Typography>
      <div className="flex gap-3 h-full overflow-y-auto">
        <div className="w-1/3">
          <Doughnut data={data} options={optionsCharts} />
        </div>
        <div className="flex flex-col gap-2">
          {datas?.map((item, i) => (
            <div className="flex gap-2 items-center" key={i}>
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: colors ? colors[i] : '' }}
              ></div>
              <Typography placeholder={''} variant="small">
                {item.nama_anggaran} <strong>{item.percentage}%</strong>
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
