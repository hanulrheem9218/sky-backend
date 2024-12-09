import { BooksService } from './book.service';
import { CreateBookDto } from './dto/create-bok.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BooksService);
    addBook(bookTitle: string, bookDate: Date, bookPages: number): Promise<{
        'current-book': CreateBookDto;
        'inserted-data': import("./schema/book.schema").Book;
    }>;
    getTest(): Promise<{
        Test: string;
    }>;
    getBooks(): Promise<{
        books: string;
        book?: undefined;
    } | {
        book: import("./schema/book.schema").Book[];
        books?: undefined;
    }>;
}
