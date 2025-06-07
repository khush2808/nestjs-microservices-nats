import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  username: string;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  displayName?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
