import { User } from 'src/auth/user.entity';
import { BaseEntity } from 'typeorm';
import { BoardStatus } from './board.status.enum';
export declare class Board extends BaseEntity {
    id: number;
    title: string;
    desc: string;
    status: BoardStatus;
    user: User;
}
