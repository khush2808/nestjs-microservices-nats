import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { createUserDto } from './dtos/CreateUser.dto';
@Controller()
export class UserMicroserviceController {
   
    @MessagePattern({cmd:'createUser'})
    createUser(@Payload() data:createUserDto){
        return data;
    }
    @EventPattern({cmd:'createPayment'})
    createPayment(@Payload() data:any){
        console.log(data);
        return data;
    }
}