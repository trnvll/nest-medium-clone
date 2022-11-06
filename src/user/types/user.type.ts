import { UserEntity } from '@app/user/user.entity';

type TUser = Omit<UserEntity, 'hashPassword'>;

export { TUser };
