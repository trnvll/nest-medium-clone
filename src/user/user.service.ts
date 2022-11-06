import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@app/user/dto/createUser.dto';

@Injectable()
class UserService {
  async createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}

export { UserService };
