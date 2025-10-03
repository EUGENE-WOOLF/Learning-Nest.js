import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/users/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signin() {
    return { message: 'hello user' };
  }

  @Post('signup')
  signup() {
    return 'you have signed up';
  }
}
