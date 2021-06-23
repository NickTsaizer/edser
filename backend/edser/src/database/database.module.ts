import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from "./schemas/post.schema";
import { DatabaseController } from "./database.controller";
import { DatabaseService } from "./database.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [DatabaseController],
    providers: [DatabaseService],
})
export class DatabaseModule {}