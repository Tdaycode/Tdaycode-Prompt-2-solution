import { Controller, Get, Post, Body,  Param, HttpCode, HttpStatus } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import {
  ApiCreatedResponse,
  
  ApiOkResponse,  
  ApiOperation
} from '@nestjs/swagger';


@Controller('reminder')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new reminder' }) 
  @ApiCreatedResponse({})
  create(@Body() createReminderDto: CreateReminderDto) {
    return this.remindersService.create(createReminderDto);
  }

  @Get('')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all reminders' })
  @ApiOkResponse({})
  findAll() {
    return this.remindersService.find();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all reminders by id' })
  @ApiOkResponse({})
  async findOne(@Param('id') id: string) {
    const reminder = await this.remindersService.findOne(parseInt(id));
    return reminder
    
  }



}
