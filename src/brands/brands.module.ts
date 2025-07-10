import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSchema } from 'src/schemas/brand.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Brands", schema: BrandSchema }])],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
