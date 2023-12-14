import { Typography } from "@material-tailwind/react";
import { WalletIcon } from "lucide-react";


export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <div>
                <Typography placeholder={''} variant="h2" className="text-custom_blue_2 font-bold">Hello Alfi Arisandi</Typography>
                <Typography placeholder={''} variant="lead" className="text-custom_gray">Good Afternoon</Typography>
            </div>
            <div className="p-3 bg-white/30 rounded-xl flex gap-3">
                <div className="p-3 bg-gradient-to-tl from-custom_blue to-custom_pink_2 rounded-md">
                    <WalletIcon className="h-8 w-8 text-white" />
                </div>
                <div className="max-w-[300px]">
                    <Typography placeholder={''} variant="h6" className="text-custom_gray">Balance</Typography>
                    <Typography placeholder={''} variant="h4" className="text-custom_blue_2">Rp. 999,999,999.00</Typography>
                </div>
            </div>
        </div>
    )
}
