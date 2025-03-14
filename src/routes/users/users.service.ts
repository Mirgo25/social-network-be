import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../database/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserSchema } from './schemas/createUser.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(userData: CreateUserSchema): Promise<User> {
    const hashPassword = await bcrypt.hash(userData.password, 10);
    const user = this.usersRepository.create({ ...userData, password: hashPassword });
    return this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async findUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
