import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ChatGPTDTO {
  @ApiProperty({
    example: '太陽為什麼是圓的',
    description: 'Message to send to ChatGPT',
  })
  @IsString()
  readonly message: string;
}
