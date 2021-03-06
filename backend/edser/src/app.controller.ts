import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { EdAuthGuard } from './auth/ed-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(EdAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}