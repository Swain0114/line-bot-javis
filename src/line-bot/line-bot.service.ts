import { Injectable } from '@nestjs/common';
import { CreateLineBotDTO } from './dto/create.dto';
import { UpdateLineBotDto } from './dto/update.dto';
import { WebhookRequestBody } from '@line/bot-sdk';

@Injectable()
export class LineBotService {
  create(createLineBotDto: CreateLineBotDTO) {
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

  reply(webhookRequestBody: WebhookRequestBody) {
    return `This action replies a message: ${webhookRequestBody}`;
  }
}
