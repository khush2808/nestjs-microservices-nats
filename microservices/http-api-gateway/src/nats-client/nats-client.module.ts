import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { UsersModule } from "src/users/users.module";
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
        UsersModule,
    ],
    providers: [],
    exports: [],
})
export class NatsClientModule {}