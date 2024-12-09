import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-bok.dto';
import { Book } from 'src/schema/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel('book') private readonly bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel({
      name: createBookDto.name,
      year: createBookDto.year,
      page: createBookDto.page,
    });
    var result = await createdBook.save();
    console.log(result);
    return result;
  }

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }
}
