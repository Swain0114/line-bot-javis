import { ApiProperty } from '@nestjs/swagger';

export class ChatGPTDTO {
  @ApiProperty({
    example: '太陽為什麼是圓的',
    description: 'Message to send to ChatGPT',
  })
  readonly message: string;
}
