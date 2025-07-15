import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSchema } from 'src/schemas/brand.schema';
import { TagsSchema } from 'src/schemas/tags.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Brands", schema: BrandSchema },{name:"Tags", schema:TagsSchema}])],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
