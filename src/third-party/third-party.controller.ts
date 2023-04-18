import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ChatGPTController } from '../chat-gpt/chat-gpt.controller';
import { ChatGPTService } from '../chat-gpt/chat-gpt.service';
import { ChatGPTDTO } from '../chat-gpt/chat-gpt.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('third-party')
@Controller('third-party')
export class ThirdPartyController {
  constructor(private readonly chatGPTService: ChatGPTService) {}

  @Get('/chat-gpt/api-keys')
  @UseGuards(ChatGPTController)
  @ApiOperation({ summary: 'Get ChatGPT API Key' })
  @ApiResponse({ status: 200, description: 'Return ChatGPT API Key' })
  checkChatGPTAPIKey(): string {
    return this.chatGPTService.getAPIKey();
  }

  @Get('/chat-gpt/engines')
  @UseGuards(ChatGPTController)
  @ApiOperation({ summary: 'List ChatGPT Engines' })
  @ApiResponse({ status: 200, description: 'Return ChatGPT Engines' })
  async listChatGPTEngines() {
    return this.chatGPTService.listEngines();
  }

  @Post('/chat-gpt/talk')
  @UseGuards(ChatGPTController)
  @ApiOperation({ summary: 'Talk to ChatGPT' })
  @ApiResponse({ status: 200, description: 'Return ChatGPT response' })
  async talkToChatGPT(@Body() chatGPTDTO: ChatGPTDTO) {
    return this.chatGPTService.talkToChatGPT(chatGPTDTO.message);
  }
}
