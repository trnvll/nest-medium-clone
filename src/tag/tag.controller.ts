import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagEntity } from '@app/tag/tag.entity';

@Controller('tags')
class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<{ tags: TagEntity['name'][] }> {
    const tagEntities = await this.tagService.findAll();
    return {
      tags: tagEntities.map((entity) => entity.name),
    };
  }
}

export { TagController };
