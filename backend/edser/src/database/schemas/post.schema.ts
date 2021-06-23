import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ timestamps: { createdAt: 'created_at' } })
export class Post {
    @Prop({ required: true })
    author: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);