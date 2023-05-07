import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.appService.create(createUserDTO);
  }
}
