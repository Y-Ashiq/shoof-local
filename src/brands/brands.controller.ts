import { BrandsService } from './brands.service';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
  Param,
  Delete,
  Query,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { addBrandDto } from './dto/brands.dto';
import { multerOptions } from './dto/fileValidation';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller()
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get('brands')
  getAllApprovedBrands() {
    return this.brandsService.getAllApprovedBrands();
  }

  @Get('dashboard/brands')
  @UseGuards(AuthGuard)
  getAllBrandsForDashboard() {
    return this.brandsService.getAllBrandsForDashboard();
  }
  
  @Get('dashboard/brands/:id')
  @UseGuards(AuthGuard)
  getBrandById(@Param('id') id: string) {
    return this.brandsService.getBrandById(id);
  }
  @Patch('dashboard/brands/:id')
  @UseGuards(AuthGuard)
  updateBrand(@Param('id') id: string, @Body() body: any) {
    return this.brandsService.updateBrand(id, body);
  }
  @Get('brands')
  brandSearch(@Query('search') search: string) {
    return this.brandsService.brandSearch(search);
  }

  @Post('submit-brand')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  addBrand(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: addBrandDto,
  ) {
    return this.brandsService.addBrand(file, body);
  }

  @Delete('brands/:id')
  @UseGuards(AuthGuard)
  deleteBrand(@Param('id') id: string) {
    return this.brandsService.deleteBrand(id);
  }
}
