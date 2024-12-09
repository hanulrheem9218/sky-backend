import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-bok.dto';
import { Book } from './schema/book.schema';
export declare class BooksService {
    private readonly bookModel;
    constructor(bookModel: Model<Book>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
}
