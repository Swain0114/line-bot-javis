import { Injectable } from '@nestjs/common';
import { CreateLineBotDto } from './dto/create-line-bot.dto';
import { UpdateLineBotDto } from './dto/update-line-bot.dto';

@Injectable()
export class LineBotService {
  create(createLineBotDto: CreateLineBotDto) {
    return 'This action adds a new lineBot';
  }

  findAll() {
    return `This action returns all lineBot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineBot`;
  }

  update(id: number, updateLineBotDto: UpdateLineBotDto) {
    return `This action updates a #${id} lineBot`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineBot`;
  }
}
