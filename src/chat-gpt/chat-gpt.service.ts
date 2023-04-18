import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class ChatGPTService {
  APIKey: string;
  openAIConfig: Configuration;
  openAIClient: OpenAIApi;
  model: string;
  constructor(private readonly configService: ConfigService) {
    this.APIKey = this.configService.get<string>('CHATGPT_API_KEY');
    this.openAIConfig = new Configuration({
      organization: this.configService.get<string>('CHATGPT_ORGANIZATION'),
      apiKey: this.APIKey,
    });
    this.openAIClient = new OpenAIApi(this.openAIConfig);
    this.model = this.configService.get<string>('CHATGPT_DEFAULT_MODEL');
  }

  getAPIKey(): string {
    return this.APIKey;
  }

  async listEngines() {
    return this.openAIClient.listEngines().then((response) => {
      return response.data.data;
    });
  }

  async talkToChatGPT(message: string) {
    return this.openAIClient
      .createChatCompletion({
        model: this.model,
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
      })
      .then((response) => {
        console.log('response.data :>> ', response.data);
        return response.data.choices[0].message.content;
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
  }
}
