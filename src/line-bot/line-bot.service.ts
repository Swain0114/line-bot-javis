import { Injectable } from '@nestjs/common';
import { CreateLineBotDTO } from './dto/create.dto';
import { UpdateLineBotDto } from './dto/update.dto';
import { WebhookRequestBody } from '@line/bot-sdk';
import { ChatGPTService } from 'src/chat-gpt/chat-gpt.service';

@Injectable()
export class LineBotService {
  constructor(private readonly chatGPTService: ChatGPTService) {}
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
    console.log('webhookRequestBody :>> ', JSON.stringify(webhookRequestBody));
    // const messageEvents = webhookRequestBody.events.filter((element) => {
    //   return element.type === 'message';
    // });
    // this.chatGPTService.talkToChatGPT(messageEvents[0].message.text);
    return `This action replies a message: ${webhookRequestBody}`;
  }
}
