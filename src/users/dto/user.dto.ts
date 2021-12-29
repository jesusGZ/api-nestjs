import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto {
  @IsInt()
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
