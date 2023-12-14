import { useAuthLoginMutation } from '@api/services/authApiService';
import { IUser, IUserLogin } from '@interfaces/authTypes';
import { IResponseData } from '@interfaces/responseTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { encode } from 'base-64';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IUserLogin>();

  const [loginMutation] = useAuthLoginMutation();

  const onSubmintLogin: SubmitHandler<IUserLogin> = async (data) => {
    try {
      const response: IResponseData<IUser> = await toast
        .promise(
          loginMutation({
            ...data,
            password: encode(data.password),
          }).unwrap(),
          {
            pending: 'Loading ...',
            success: 'Success!',
            error: 'Error!',
          }
        )
        .finally(() => {
          navigate('../../');
        });
      Cookies.set('_users', JSON.stringify(response));
    } catch (error) {
      return error;
    }
  };

  return {
    onSubmintLogin,
    register,
    handleSubmit,
  };
}
