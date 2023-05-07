import { PartialType } from '@nestjs/mapped-types';
import { CreateLineBotDTO } from './create.dto';

export class UpdateLineBotDto extends PartialType(CreateLineBotDTO) {}
