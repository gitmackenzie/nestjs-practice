import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getAllBoard(): Board[];
    getBoardById(id: string): Board;
    createBoard(createBoardDto: CreateBoardDto): Board;
    updateBoardStatus(id: string, status: BoardStatus): Board;
    deleteBoard(id: string): void;
}
