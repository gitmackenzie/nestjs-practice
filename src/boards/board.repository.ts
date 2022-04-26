import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

@EntityRepository()
export class BoardRepository extends Repository<Board> {}

// @EntityRepository(Board)
// export class BoardRepository extends Repository<Board> {
//     async createBoard(createBoardDto: CreateBoardDto): Promise<Board> { const { title, description } = createBoardDto; const board = this.create({ title, description, status: BoardStatus.PUBLIC, }); await this.save(board); return board; } }
