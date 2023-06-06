import { Injectable } from '@nestjs/common';
import { CreateLineBotDTO } from './dto/create.dto';
import { UpdateLineBotDto } from './dto/update.dto';
import { WebhookEvent } from '@line/bot-sdk';
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

  async reply(webhookRequestBody: {
    destination: string;
    events: Array<WebhookEvent>;
  }) {
    let talkResponse;
    console.log('webhookRequestBody :>> ', JSON.stringify(webhookRequestBody));
    const { type } = webhookRequestBody.events[0];
    switch (type) {
      case 'message':
        const { message } = webhookRequestBody.events[0];
        switch (message.type) {
          case 'text':
            talkResponse = await this.chatGPTService.talkToChatGPT(
              message.text,
            );
            break;

          default:
            break;
        }
        break;
      default:
        console.log(`msgType: ${type}`);
        break;
    }
    console.log('talkResponse :>> ', talkResponse);
    return talkResponse;
  }
}
