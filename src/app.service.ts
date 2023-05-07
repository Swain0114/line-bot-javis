import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  create(createUserDTO: CreateUserDTO) {
    return `This action adds a new user with email: ${createUserDTO.email} and password: ${createUserDTO.password}`;
  }
}
