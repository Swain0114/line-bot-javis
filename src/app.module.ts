import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineBotModule } from './line-bot/line-bot.module';
import { Config } from './config/config.module';
import { ThirdPartyModule } from './third-party/third-party.module';
import { ChatGPTModule } from './chat-gpt/chat-gpt.module';

@Module({
  imports: [LineBotModule, Config, ThirdPartyModule, ChatGPTModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
