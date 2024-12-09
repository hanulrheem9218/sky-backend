import mongoose from 'mongoose';

export interface Book extends mongoose.Document {
  id: string;
  title: string;
  year: Date;
  page: number;
}
