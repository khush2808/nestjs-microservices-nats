import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'NATS_CLIENT',
                transport: Transport.NATS,
                options: {
                    servers: ['nats://nats'],
                },
            },
        ]),
    ],
    providers: [],
    exports: [],
})
export class NatsClientModule {}