import mongoose from 'mongoose';

export interface CreateBookDto {
  name: string;
  year: Date;
  page: number;
}
