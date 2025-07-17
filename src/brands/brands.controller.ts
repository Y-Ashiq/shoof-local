// =====================
// Controller Index:
// =====================
// 1. GET    /brands                - Get all approved brands (with optional pagination and tags)
// 2. GET    /brands/search         - Search brands by query
// 3. POST   /submit-brand          - Submit a new brand (with file upload)
// 4. GET    /brands/:id            - Get a brand by its ID
//
// ===== Dashboard (protected) =====
// 5. GET    /dashboard/brands      - Get all brands for dashboard (requires AuthGuard)
// 6. DELETE /dashboard/brands/:id  - Delete a brand by ID (requires AuthGuard)
// 7. PATCH  /dashboard/brands/:id  - Update a brand by ID (requires AuthGuard)
// =====================
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

  // GET /brands - Get all approved brands (optionally filtered by page and tags)
  @Get('brands')
  getAllApprovedBrands(
    @Query('page') page: number,
    @Query('tags') tags: string[],
  ) {

    return this.brandsService.getAllApprovedBrands(page, tags);
  }

  // GET /brands/search - Search brands by a search query
  @Get('brands/search/')
  brandSearch(@Query('search') search: string, @Query('tags') tags: string[]) {

    return this.brandsService.brandSearch(search, tags);
  }
  // POST /submit-brand - Submit a new brand with an uploaded file
  @Post('submit-brand')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  addBrand(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: addBrandDto,
  ) {
    return this.brandsService.addBrand(file, body);
  }
  // GET /brands/:id - Get a brand by its ID
  @Get('brands/:id')
  getBrandById(@Param('id') id: string) {
    return this.brandsService.getBrandById(id);
  }
  /**===============================for the dashboard===============================*/

  // GET /dashboard/brands - Get all brands for dashboard (protected by AuthGuard)
  @Get('dashboard/brands')
  @UseGuards(AuthGuard)
  getAllBrandsForDashboard(@Query('page') page: number,
    @Query('status') status: string,) {
    return this.brandsService.getAllBrandsForDashboard(page,status);
  }

  // DELETE /dashboard/brands/:id - Delete a brand by ID (protected by AuthGuard)
  @Delete('dashboard/brands/:id')
  @UseGuards(AuthGuard)
  deleteBrand(@Param('id') id: string) {
    return this.brandsService.deleteBrand(id);
  }
  // PATCH /dashboard/brands/:id - Update a brand by ID (protected by AuthGuard)
  @Patch('dashboard/brands/:id')
  @UseGuards(AuthGuard)
  updateBrand(@Param('id') id: string, @Body() body: any) {
    return this.brandsService.updateBrand(id, body);
  }


}
