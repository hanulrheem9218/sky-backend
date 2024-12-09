import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { BookSchema } from './schemas/book.schema';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './app.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BookModule,
    MongooseModule.forRoot(process.env.MONGO_URL, {
      dbName: process.env.MONGO_DB_NAME,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppConfigService],
})
export class AppModule {}
