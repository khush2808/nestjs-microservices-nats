import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { createUserDto } from './dtos/CreateUser.dto';
@Controller()
export class UserMicroserviceController {
   
    @MessagePattern({cmd:'createUser'})
    createUser(@Payload() data:createUserDto){
        return data;
    }
}