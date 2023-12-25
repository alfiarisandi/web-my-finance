import { Transaksi } from '@interfaces/dashboardTypes';
import { Typography } from '@material-tailwind/react';
import { useCurrencyFormat } from '@utils/helper';
import { ShoppingBag } from 'lucide-react';
import moment from 'moment';

export default function LatestTransaction({
  data = [],
}: {
  data: Transaksi[] | undefined;
}) {
  return (
    <div className="bg-white/30 p-3 rounded-lg w-full flex flex-col">
      <Typography
        placeholder={''}
        variant="paragraph"
        className="font-semibold"
      >
        Latest Transaction
      </Typography>
      <div className="mt-4 h-full overflow-y-auto flex flex-col gap-2">
        {data?.map((item, i) => (
          <div className="flex justify-between items-center" key={i}>
            <div className="flex justify-between items-center gap-3">
              <div className="p-2 rounded-md bg-white/50 text-custom_blue_2 flex justify-center items-center h-fit">
                <ShoppingBag />
              </div>
              <div>
                <Typography
                  placeholder={''}
                  variant="small"
                  className="font-medium"
                >
                  {item.nama_transaksi}
                </Typography>
                <Typography
                  placeholder={''}
                  variant="small"
                  className="font-light text-custom_gray"
                >
                  {moment(item.timestamp).format('LLLL')}
                </Typography>
              </div>
            </div>
            <div className="p-2">
              <Typography
                placeholder={''}
                variant="paragraph"
                className={`font-semibold ${
                  item.type_transaksi === 'Outcome'
                    ? 'text-red-700'
                    : 'text-green-600'
                }`}
              >
                {item.type_transaksi === 'Outcome'
                  ? `- ${useCurrencyFormat(item.nilai_transaksi)}`
                  : `${useCurrencyFormat(item.nilai_transaksi)}`}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
