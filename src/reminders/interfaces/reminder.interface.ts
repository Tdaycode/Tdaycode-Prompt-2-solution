import { Document } from 'mongoose';

export interface Reminder extends Document {
  description: string,
  date: Date,
  user: number,
}