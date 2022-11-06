import { IsEmail, IsNotEmpty } from 'class-validator';

class CreateUserDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}

export { CreateUserDto };
