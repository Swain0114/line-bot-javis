import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineBotService } from './line-bot.service';
import { CreateLineBotDto } from './dto/create-line-bot.dto';
import { UpdateLineBotDto } from './dto/update-line-bot.dto';

@Controller('line-bot')
export class LineBotController {
  constructor(private readonly lineBotService: LineBotService) {}

  @Post()
  create(@Body() createLineBotDto: CreateLineBotDto) {
    return this.lineBotService.create(createLineBotDto);
  }

  @Get()
  findAll() {
    return this.lineBotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lineBotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLineBotDto: UpdateLineBotDto) {
    return this.lineBotService.update(+id, updateLineBotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lineBotService.remove(+id);
  }
}
