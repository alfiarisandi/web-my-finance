export interface IResponseData<T> {
  data?: T;
  message: string;
  status: string;
  token?: string;
}
