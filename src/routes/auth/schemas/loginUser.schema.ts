import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserSchema {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
