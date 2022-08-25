import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Reminder} from './interfaces/reminder.interface';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class RemindersService {
  constructor(@InjectModel('Reminder') private reminderModel: Model<Reminder>) {}
   

  async create(createReminderDto: CreateReminderDto): Promise<Reminder> {

    const reminder = new this.reminderModel(createReminderDto)
    const lastId = await this.reminderModel.find().sort({ _id: -1 }).limit(1);
    if (lastId.length > 0) {
      reminder._id = lastId[0]._id + 1;
    } else {
      reminder._id = 1;
    }
    await reminder.save();
    return reminder;
  }

  async find(user: number, after: string): Promise<Reminder[]> {
    let date = new Date( parseInt(after)); 
    let query = {};
    if (user) {
      query = { user: user };
    }

    if (after) {
      query = { ...query, date: { $gte: date } };
    }
    return await this.reminderModel.find(query);
  }

  async findOne(id: number): Promise<Reminder> { 
    const reminder = await this.reminderModel.findById(id);
    if (!reminder) {
      throw new NotFoundException(`${id} not found`);
    } 
    return reminder;
  }

}
