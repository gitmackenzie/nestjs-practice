import { cp } from 'fs';
import { User } from 'src/auth/user.entity';
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn() // 유일한 값으로 설정하기 위한 데코레이터
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  status: BoardStatus;

  @ManyToOne(type => User, user => user.boards, {eager: false})
  user: User;
}
