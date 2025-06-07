import { Controller, Inject } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  @EventPattern({ cmd: 'createPayment' })
  createPayment(@Payload() data: any) {
    this.natsClient.emit('createPayment', data);
  }
}
