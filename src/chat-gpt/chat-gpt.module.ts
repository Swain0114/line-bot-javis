import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatGPTController } from './chat-gpt.controller';
import { ChatGPTService } from './chat-gpt.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ChatGPTController],
  providers: [ChatGPTService],
})
export class ChatGPTModule {}
