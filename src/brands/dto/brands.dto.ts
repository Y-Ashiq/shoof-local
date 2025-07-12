import {
  IsArray,
  IsString,
  IsUrl,
  isURL,
  MaxLength,
  MinLength,
} from 'class-validator';

export class addBrandDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsString()
  @MinLength(10)
  @MaxLength(1500)
  description: string;

  @IsArray()
  @IsUrl({}, { each: true })
  links: string[];
}
