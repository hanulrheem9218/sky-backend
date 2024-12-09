import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './book.service';
import { CreateBookDto } from './dto/create-bok.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  async addBook(
    @Body('name') bookTitle: string,
    @Body('year') bookDate: Date,
    @Body('page') bookPages: number,
  ) {
    var book: CreateBookDto = {
      name: bookTitle,
      year: bookDate,
      page: bookPages,
    };
    console.log(book);
    const bookId = await this.bookService.create(book);
    return { 'current-book': book, 'inserted-data': bookId };
  }
  @Get('/test')
  async getTest() {
    return { Test: 'Received' };
  }
  @Get('/result')
  async getBooks() {
    const books = await this.bookService.findAll();
    if (books.length <= 0) return { books: 'are empty' };
    return { book: books };
  }
}
