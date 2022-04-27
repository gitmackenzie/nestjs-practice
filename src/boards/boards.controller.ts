import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { title } from 'process';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Board } from './board.entity';
import { BoardStatus } from './board.status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  private logger = new Logger('BoardsController')
  constructor(private boardsService: BoardsService) {}

  // 전체 게시글 가져오기
  //   @Get()
  //   getAllBoard(): Board[] {
  //     return this.boardsService.getAllBoards();
    // }
      @Get()
      getAllBoard(
        @GetUser() user: User
      ): Promise<Board[]> {
        this.logger.verbose(`${user.username}이 작성한 게시글입니다`);
        return this.boardsService.getAllBoards(user);
      }

  //   // id값을 받아서 하나의 게시글 가져오기
      @Get('/:id')
      getBoardById(@Param('id') id:number) : Promise<Board> {
        return this.boardsService.getBoardById(id);
      }
  //   @Get('/:id')
  //   getBoardById(@Param('id') id: string): Board {
  //     // 여러가지 값이 들어있을때 @Param() param: string 이라고 해두면 특정값을 뒤에서 지정해서 사용 가능
  //     // @파라미터로 들어오는 id 값을 id로 지정하고 그건 스트링 타입이다. 하나의 게시글만 가져오기때문에 :Board[] 가 아닌 Board
  //     return this.boardsService.getBoardById(id);
  //   }

  //   // 게시물 생성
      @Post()
      @UsePipes(ValidationPipe)
      createBoard(@Body() createBoardDto: CreateBoardDto,
      @GetUser() user:User): Promise<Board> {
        this.logger.verbose(`사용자 ${user.username}이 게시글을 작성했습니다
        Payload: ${JSON.stringify(createBoardDto)}`);
        // 영상에서는 return this.boardsService.createBoard(CreateBoardDto);
        return this.boardsService.CreateBoard(createBoardDto, user);
      }
  //   @Post() 
  //   @UsePipes(ValidationPipe)
  //   createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //     // 리턴되는 게시글이 하나라서 Board[]가 아닌 Board를 타입으로 지정
  //     {
  //       return this.boardsService.createBoard(createBoardDto);
  //     }
  //   }

      @Patch('/:id/status')
      updateBoardStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
      ) {
          return this.boardsService.updateBoardStatus(id, status);
      }
  //   // 특정 id값으로 게시물 가져와서 상태값 변경하기
  //   @Patch('/:id/status')
  //   updateBoardStatus(
  //     @Param('id') id: string,
  //     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  //   ) {
  //     return this.boardsService.updateBoardStatus(id, status);
  //   }

      @Delete('/:id')
      deleteBoard(@Param('id', ParseIntPipe) id,
      @GetUser() user: User
      ): Promise<void> {
        return this.boardsService.deleteBoard(id, user);
      }
  //   // 특정 id 값으로 게시물 지우기
  //   @Delete('/:id')
  //   deleteBoard(@Param('id') id: string): void {
  //     this.boardsService.deleteBoard(id);
  //   }
}
