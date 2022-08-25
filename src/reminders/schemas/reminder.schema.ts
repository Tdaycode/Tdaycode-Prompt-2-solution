
import * as mongoose from 'mongoose';


export const ReminderSchema = new mongoose.Schema({
    _id: {
    type: Number,
    default: 0,
    },
    user: {
      type: Number,
      required: [true, 'User is required'],
  },
  description: { 
    type: String,
    required: [true, 'Description is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
}, {
    versionKey: false,
    timestamps: true
});




