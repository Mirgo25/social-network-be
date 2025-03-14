import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserSchema } from '../users/schemas/createUser.schema';
import { LoginUserSchema } from './schemas/loginUser.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginUserSchema) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() registerBody: CreateUserSchema) {
    return this.authService.register(registerBody);
  }
}
