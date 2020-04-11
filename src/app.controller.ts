import { Controller, Get, Post, UseGuards, Body, Request } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserDto } from './users/user.dto';

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() req: UserDto) {
    return this.authService.login(req);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    console.log(req.headers)
    return req.user;
  }
}
