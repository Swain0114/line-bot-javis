import { Controller, Post, Body } from '@nestjs/common';
import { LineBotService } from './line-bot.service';
import { WebhookRequestBody } from '@line/bot-sdk';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('line-bot')
@Controller('line-bot')
export class LineBotController {
  constructor(private readonly lineBotService: LineBotService) {}

  @Post('/reply')
  replyMessage(@Body() webhookRequestBody: WebhookRequestBody) {
    return this.lineBotService.reply(webhookRequestBody);
  }
}
