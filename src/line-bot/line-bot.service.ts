import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateLineBotDTO } from './dto/create.dto';
import { UpdateLineBotDto } from './dto/update.dto';
import { Client, WebhookEvent } from '@line/bot-sdk';
import { ChatGPTService } from 'src/chat-gpt/chat-gpt.service';

@Injectable()
export class LineBotService {
  lineBotConfig: {
    channelAccessToken: string;
    channelSecret: string;
  };
  client: Client;
  constructor(
    private readonly chatGPTService: ChatGPTService,
    private readonly configService: ConfigService,
  ) {
    this.lineBotConfig = {
      channelAccessToken: this.configService.get<string>(
        'LINE_CHANNEL_ACCESS_TOKEN',
      ),
      channelSecret: this.configService.get<string>('LINE_CHANNEL_SECRET'),
    };
    this.client = new Client(this.lineBotConfig);
  }
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
        const { message, replyToken } = webhookRequestBody.events[0];
        switch (message.type) {
          case 'text':
            talkResponse = await this.chatGPTService.talkToChatGPT(
              message.text,
            );
            return this.client.replyMessage(replyToken, {
              type: 'text',
              text: talkResponse,
            });
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
  }
}
