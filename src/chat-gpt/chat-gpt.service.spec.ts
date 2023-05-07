import { Test, TestingModule } from '@nestjs/testing';
import { ChatGPTService } from './chat-gpt.service';

describe('ChatGPTService', () => {
  let service: ChatGPTService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatGPTService],
    }).compile();

    service = module.get<ChatGPTService>(ChatGPTService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
