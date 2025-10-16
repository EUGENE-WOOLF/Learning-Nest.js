import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/users/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login() {
    return 'user has logged in here';
  }
}
