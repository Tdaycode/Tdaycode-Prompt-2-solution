import { Module, MiddlewareConsumer , NestModule} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReminderSchema } from './schemas/reminder.schema';
import { RemindersService } from './reminders.service';
import { RemindersController } from './reminders.controller';
import { ErrorMiddleware } from './common/middleware/reminder.middleware';

@Module({
  imports:[ MongooseModule.forFeature([{name: 'Reminder', schema: ReminderSchema}])],
  controllers: [RemindersController],
  providers: [RemindersService]
})
export class RemindersModule implements NestModule {
   configure(consumer: MiddlewareConsumer) {
    consumer.
      apply(ErrorMiddleware).
      forRoutes('*');
  }
}
