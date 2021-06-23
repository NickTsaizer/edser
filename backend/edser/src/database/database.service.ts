import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {Post, PostDocument, PostSchema} from './schemas/post.schema';

@Injectable()
export class DatabaseService {
    constructor(
        @InjectModel('Post') private readonly productModel: Model<Post>,
    ) {}

    async addPost(author: string, title: string, content: string) {
        const newProduct = new this.productModel({
            author: author,
            title: title,
            content: content,
        });
        const result = await newProduct.save();
        return result.id as string;
    }

    async findAllPosts() {
        const post: PostDocument[] = await this.productModel.find().sort({ created_at: -1 }).exec();
        return post.map(p => ({
            id: p.id,
            author: p.author,
            title: p.title,
            content: p.content
        }));
    }

    async findFirstPost(post_id: string) {
        const post = await this.findPost(post_id);
        return {
            id: post.id,
            author: post.author,
            title: post.title,
            content: post.content,
        };
    }

    async updatePost(
        productId: string,
        author: string,
        title: string,
        content: string,
    ) {
        const updateTarget = await this.findPost(productId);
        if (author) {
            updateTarget.author = author;
        }

        if (title) {
            updateTarget.title = title;
        }

        if (content) {
            updateTarget.content = content;
        }
        updateTarget.save();
    }

    async deletePost(prodId: string) {
        const result = await this.productModel.deleteOne({_id: prodId}).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find product.');
        }
    }

    private async findPost(id: string): Promise<PostDocument> {
        let product;
        try {
            product = await this.productModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find product.');
        }
        if (!product) {
            throw new NotFoundException('Could not find product.');
        }
        return product;
    }
}