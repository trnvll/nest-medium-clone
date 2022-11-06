import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@app/user/dto/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@app/user/user.entity';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET } from '@app/config';
import { IUserResponse } from '@app/user/types/userResponse.interface';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { email, username } = createUserDto;
    const userByEmail = this.userRepository.findOne({ where: { email } });
    const userByUsername = this.userRepository.findOne({ where: { username } });
    if (userByEmail || userByUsername) {
      throw new HttpException(
        'user with specified email or username already exists',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);
    return await this.userRepository.save(newUser);
  }

  generateToken(user: UserEntity): string {
    return sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      JWT_SECRET,
    );
  }

  buildUserResponse(user: UserEntity): IUserResponse {
    return {
      user: {
        ...user,
        token: this.generateToken(user),
      },
    };
  }
}

export { UserService };
