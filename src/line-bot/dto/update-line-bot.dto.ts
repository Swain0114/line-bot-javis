import { PartialType } from '@nestjs/mapped-types';
import { CreateLineBotDto } from './create-line-bot.dto';

export class UpdateLineBotDto extends PartialType(CreateLineBotDto) {}
