import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getBoardById(id: number): Promise<Board>;
    createBoard(CreateBoardDto: CreateBoardDto): Promise<Board>;
}
