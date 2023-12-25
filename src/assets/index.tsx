import { Landmark } from 'lucide-react';
import eCard from './e-payment.png';
import wallet from './wallet.png';
import bankBca from './logo-bank-bca.png';
import bankBni from './logo-bank-bni.png';
import bankBri from './logo-bank-bri.png';
import bankMandiri from './logo-bank-mandiri.png';

export const IconTabungans = {
  bank: <Landmark className="h-8 w-8" />,
  bankBca: <img src={bankBca} className="h-5 w-fit object-contain" />,
  bankBni: <img src={bankBni} className="h-5 w-fit object-contain" />,
  bankBri: <img src={bankBri} className="h-8 w-fit object-contain" />,
  bankMandiri: <img src={bankMandiri} className="h-5 w-fit object-contain" />,
  dompet: <img src={wallet} className="h-8 w-fit object-contain" />,
  eCard: <img src={eCard} className="h-8 w-fit object-contain" />,
};
