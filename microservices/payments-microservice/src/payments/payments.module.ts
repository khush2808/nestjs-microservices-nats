import { Inject, Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { NatsClientModule } from '../nats-client/nats-client.module';
import { ClientProxy } from '@nestjs/microservices';

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentsController],
  providers: [],
  exports: [],
})
export class PaymentsModule {
    constructor(@Inject('NATS_SERVICE') private  natsClient: ClientProxy) {}
}
