import { TUser } from '@app/user/types/user.type';

interface IUserResponse {
  user: TUser & { token: string };
}

export { IUserResponse };
