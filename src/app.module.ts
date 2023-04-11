import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { UsersModule } from './module/users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    UsersModule,
  ],
})
export class AppModule {}
