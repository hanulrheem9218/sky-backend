import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { BookSchema } from './schemas/book.schema';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    BookModule,
    MongooseModule.forRoot(process.env.MONGO_URL, {
      dbName: process.env.DB_NAME,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
