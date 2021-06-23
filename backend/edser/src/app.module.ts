import { Module } from '@nestjs/common';
import {AuthModule} from "./auth/auth.module";
import {UsersModule} from "./users/users.module";
import {AppController} from "./app.controller";
import {MongooseModule, MongooseModuleOptions} from "@nestjs/mongoose";
import { DatabaseModule } from './database/database.module';

const mongo_config:MongooseModuleOptions = {
  dbName: "edser",
  authSource: "admin",
  auth: {
    user: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD
  },
  useNewUrlParser: true,
  autoCreate: true,
}

@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot("mongodb://mongo:27017", mongo_config), DatabaseModule],
  controllers: [AppController],
})
export class AppModule {}
