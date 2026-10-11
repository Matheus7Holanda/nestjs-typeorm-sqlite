
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { User } from '../users/user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;


  @Column()
  likes!: number;

  @ManyToOne(() => User, (user) => user.photos, {
    onDelete: 'CASCADE',
  })
  user!: User;
}
