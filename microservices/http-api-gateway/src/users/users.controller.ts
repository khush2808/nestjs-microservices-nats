import { Controller, Inject, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { createUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  @Post()
  createUser(@Body() createUserDto: createUserDto) {
    return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
  }
  
}
