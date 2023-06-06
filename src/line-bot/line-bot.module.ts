import { Module } from '@nestjs/common';
import { LineBotService } from './line-bot.service';
import { LineBotController } from './line-bot.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { ChatGPTService } from 'src/chat-gpt/chat-gpt.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [LineBotController],
  providers: [LineBotService, ChatGPTService],
})
export class LineBotModule {}
