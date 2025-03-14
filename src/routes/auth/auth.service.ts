import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../database/entities/user.entity';
import { CreateUserSchema } from '../users/schemas/createUser.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(userData: Pick<User, 'email' | 'id'>): Promise<{ access_token: string }> {
    const payload = { email: userData.email, sub: userData.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(userData: CreateUserSchema): Promise<{ access_token: string }> {
    const existingUser = await this.usersService.findByEmail(userData.email);
    if (existingUser) {
      throw new BadRequestException('User with this email already exists.');
    }
    const user = await this.usersService.create(userData);
    return this.login(user);
  }
}
