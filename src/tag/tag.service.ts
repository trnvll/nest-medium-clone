import { Injectable } from '@nestjs/common';

@Injectable()
class TagService {
  getAll(): string[] {
    return ['hello', 'world'];
  }
}


export { TagService }