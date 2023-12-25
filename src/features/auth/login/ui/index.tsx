import useLogin from '../hooks/useLogin';

import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const index = () => {
  const useLoginAuth = useLogin();
  return (
    <form
      onSubmit={useLoginAuth.handleSubmit(useLoginAuth.onSubmintLogin)}
      className="px-5 md:px-12 flex flex-col gap-3 bg-white/30 backdrop-blur-sm rounded-lg p-5 w-fit h-fit border border-white/50"
    >
      <Typography placeholder={''} variant="h4" className="self-start mb-10">
        Hello, Welcome
      </Typography>
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-custom_dark_blue">Email</label>
        <input
          type="text"
          className="border border-white/70 rounded-md py-2 px-4 bg-white/50 outline-none text-sm"
          placeholder="your_username"
          {...useLoginAuth.register('username')}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-custom_dark_blue">Password</label>
        <input
          type="password"
          className="border border-white/70 rounded-md py-2 px-4 bg-white/50 outline-none text-sm"
          placeholder="your_password"
          {...useLoginAuth.register('password')}
        />
      </div>
      <Link to={''} className="text-custom_gray self-end">
        Reset Password ?
      </Link>
      <Button
        type="submit"
        placeholder={''}
        className="mt-5 bg-gradient-to-r from-custom_blue to-custom_pink_2 text-custom_light"
      >
        Sign in
      </Button>
      <div className="flex justify-evenly items-center mt-3">
        <div className="bg-custom_light_gray h-[2px] rounded-sm w-[150px]"></div>
        <Link to={''} className="px-4 whitespace-nowrap text-custom_gray">
          Sign Up
        </Link>
        <div className="bg-custom_light_gray h-[2px] rounded-sm w-[150px]"></div>
      </div>
    </form>
  );
};

export default index;
