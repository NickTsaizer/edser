import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete, Request, Res, UseGuards,
} from '@nestjs/common';

import { DatabaseService } from './database.service';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('posts')

export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async addPost(
        @Request() req,
        @Body('title') post_title: string,
        @Body('content') post_content: Object,
    ) {
        const generatedId = await this.databaseService.addPost(
            req.user.username,
            post_title,
            JSON.stringify(post_content)
        );
        return { id: generatedId };
    }

    @Get()
    async findAllPosts() {
        return await this.databaseService.findAllPosts();
    }

    @Get(':id')
    getPost(@Param('id') post_id: string) {
        return this.databaseService.findFirstPost(post_id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updatePost(
        @Param('id') post_id: string,
        @Body('author') post_author: string,
        @Body('title') post_title: string,
        @Body('content') post_content: Object,
    ) {
        await this.databaseService.updatePost(post_id, post_author, post_title, JSON.stringify(post_content));
        return null;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async removeProduct(@Param('id') post_id: string) {
        await this.databaseService.deletePost(post_id);
        return null;
    }
}