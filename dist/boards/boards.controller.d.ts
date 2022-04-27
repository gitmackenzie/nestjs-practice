import { User } from 'src/auth/user.entity';
import { Board } from './board.entity';
import { BoardStatus } from './board.status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private boardsService;
    private logger;
    constructor(boardsService: BoardsService);
    getAllBoard(user: User): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
    deleteBoard(id: any, user: User): Promise<void>;
}
