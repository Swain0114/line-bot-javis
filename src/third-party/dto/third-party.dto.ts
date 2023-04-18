import { IsString, IsNotEmpty } from 'class-validator';

export class ThirdPartyServiceDTO {
  @IsString()
  @IsNotEmpty()
  APIKey: string;
}
