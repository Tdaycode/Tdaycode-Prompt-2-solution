import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { RemindersModule } from './reminders/reminders.module';

@Module({
  imports: [RemindersModule, MongooseModule.forRoot('mongodb://localhost/reminders')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
