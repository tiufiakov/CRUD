import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from "./users/users.module";
import {User} from "./users/user";
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'CRUD',
    entities: [User],
    synchronize: true,
    logging: true
  }),
    UsersModule,
    AuthModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
