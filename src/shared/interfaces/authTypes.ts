import { UUID } from 'crypto';

export interface IUser {
  uuid: UUID;
  fullname: string;
  username: string;
  email: string;
  img_name: string;
  starting_date: number;
}

export interface IUserLogin {
  username: string;
  password: string;
}
