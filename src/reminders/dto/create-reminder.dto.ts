import { ApiProperty } from '@nestjs/swagger';

export class CreateReminderDto{
  @ApiProperty()
  user: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  date: Date;
}

