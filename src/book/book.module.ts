import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService as BookService } from './book.service';
import { BookController } from './book.controller';
import { BookSchema } from 'src/schema/book.schema';

@Module({
  // name is your collection name
  imports: [MongooseModule.forFeature([{ name: 'book', schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
