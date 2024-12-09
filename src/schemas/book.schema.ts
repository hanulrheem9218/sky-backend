import mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  name: { type: String, require: true },
  year: { type: Date },
  page: { type: Number },
});
