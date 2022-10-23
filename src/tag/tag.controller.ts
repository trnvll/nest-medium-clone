import { Controller, Get } from '@nestjs/common';

@Controller('tags')
class TagController {
  @Get()
  getAll() {
    return ['hello', 'world'];
  }
}

export { TagController };
