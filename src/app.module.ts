import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LineBotModule } from './line-bot/line-bot.module';
import { Config } from './config/config.module';
import { ThirdPartyModule } from './third-party/third-party.module';
import { ChatGPTModule } from './chat-gpt/chat-gpt.module';
import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggingMiddleware } from './middleware/logging.middleware';

@Module({
  imports: [LineBotModule, Config, ThirdPartyModule, ChatGPTModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
