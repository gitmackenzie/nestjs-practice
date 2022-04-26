"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_status_enum_1 = require("./board.status.enum");
const board_repository_1 = require("./board.repository");
const typeorm_1 = require("@nestjs/typeorm");
let BoardsService = class BoardsService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async CreateBoard(createBoardDto) {
        const { title, desc } = createBoardDto;
        const board = this.boardRepository.create({
            title,
            desc,
            status: board_status_enum_1.BoardStatus.PUBLIC
        });
        await this.boardRepository.save(board);
        return board;
    }
    async getBoardById(id) {
        const found = await this.boardRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`${id}를 찾을수가 없습니다.`);
        }
        return found;
    }
};
BoardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(board_repository_1.BoardRepository)),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository])
], BoardsService);
exports.BoardsService = BoardsService;
//# sourceMappingURL=boards.service.js.map