import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

import { ClientsModule } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
