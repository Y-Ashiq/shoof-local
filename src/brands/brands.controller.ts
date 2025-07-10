import { BrandsService } from './brands.service';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { addBrandDto } from './dto/brands.dto';
import { multerOptions } from './dto/fileValidation';

@Controller()
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', multerOptions),
  )
  addBrand(@UploadedFile() file: Express.Multer.File, @Body() body:addBrandDto) {
    return this.brandsService.addBrand(file, body);
  }
}
