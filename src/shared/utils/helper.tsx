import Cookies from 'js-cookie';

export const useCurrencyFormat = (num: number | undefined) => {
  return (
    'IDR ' +
    Number(num)
      ?.toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  );
};

export const getCookiesUser = (key: string) => {
  return JSON.parse(Cookies.get('_users') || '{}')?.data[key] || '';
};
