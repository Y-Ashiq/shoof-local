import { Transform } from 'class-transformer';
import {
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
  IsOptional,
  IsArray,
} from 'class-validator';

export class addBrandDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Transform(({ value }) => value?.trim())
  name: string;

  @IsString()
  @MinLength(10)
  @MaxLength(1500)
  description: string;

  @IsUrl({}, { each: true })
  links: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}

export class PatchBrandDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @Transform(({ value }) => value?.trim())
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  @MaxLength(1500)
  description?: string;

  @IsOptional()
  @IsUrl({}, { each: true })
  links?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
