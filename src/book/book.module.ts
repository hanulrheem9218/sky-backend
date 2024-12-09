import { Controller, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from 'src/schemas/book.schema';
import { BooksService as BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  // name is your collection name
  imports: [MongooseModule.forFeature([{ name: 'book', schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
