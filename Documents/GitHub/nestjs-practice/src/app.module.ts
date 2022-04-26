import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './boards/configs/typeorm.config';

@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [TypeOrmModule.forRoot(typeORMConfig),
  BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
