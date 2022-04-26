import { Board } from './board.entity';
import { BoardStatus } from './board.status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getAllBoard(): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    createBoard(CreateBoardDto: CreateBoardDto): Promise<Board>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
    deleteBoard(id: any): Promise<void>;
}
