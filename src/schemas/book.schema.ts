import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

//model
@Schema()
export class Book {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  year: Date;
  @Prop({ required: true })
  page: number;
}

//schema
export const BookSchema = SchemaFactory.createForClass(Book);
