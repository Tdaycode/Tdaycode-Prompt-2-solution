import { Controller, Get, Post, Body,  Param, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import {
  ApiCreatedResponse,
  
  ApiOkResponse,  
  ApiOperation
} from '@nestjs/swagger';


@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new reminder' }) 
  @ApiCreatedResponse({})
  create(@Body() createReminderDto: CreateReminderDto) {
    return this.remindersService.create(createReminderDto);
  }

  @Get('/:user?/:after?')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all reminders' })
  @ApiOkResponse({})
  async find(@Query('user') user: number, @Query('after') after: Date) {
    return this.remindersService.find(user, after);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all reminders by id' })
  @ApiOkResponse({})
  async findOne(@Param('id') id: string) {
    const reminder = this.remindersService.findOne(parseInt(id));
    return reminder
    
  }



}
