import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tags' })
class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export { TagEntity };
