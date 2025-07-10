import { IsString, MaxLength, MinLength } from 'class-validator';

export class addBrandDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string; // Brand name

  @IsString()
  @MinLength(10)
  @MaxLength(500)
  description: string; // Brand description

}
