import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export const BookSchema = new mongoose.Schema({
  name: { type: String, require: true },
  year: { type: Date },
  page: { type: Number },
});
