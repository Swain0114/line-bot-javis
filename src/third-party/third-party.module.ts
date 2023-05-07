import { Module } from '@nestjs/common';
import { ThirdPartyService } from './third-party.service';
import { ThirdPartyController } from './third-party.controller';
import { ConfigModule } from '@nestjs/config';
import { ChatGPTModule } from 'src/chat-gpt/chat-gpt.module';
import { ChatGPTService } from 'src/chat-gpt/chat-gpt.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ConfigModule.forRoot(), ChatGPTModule, ScheduleModule.forRoot()],
  controllers: [ThirdPartyController],
  providers: [ThirdPartyService, ChatGPTService],
})
export class ThirdPartyModule {}
