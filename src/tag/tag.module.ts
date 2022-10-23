import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';

@Module({
  controllers: [TagController],
})
class TagModule {}

export { TagModule }