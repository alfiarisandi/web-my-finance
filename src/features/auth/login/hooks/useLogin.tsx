import { useAuthLoginMutation } from '@api/services/authApiService';

export default function useLogin() {
  const [loginMutation] = useAuthLoginMutation();
  const handleClick = async () => {
    const userAuth = await loginMutation({
      username: 'alfiarisandi',
      password: 'cGFzc3dvcmQ=',
    }).unwrap();

    console.log(userAuth);
  };
  return {
    handleClick,
  };
}
