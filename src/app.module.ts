import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './brands/brands.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TagsModule } from './tags/tags.module';


@Module({
  imports: [ BrandsModule, MongooseModule.forRoot(`${process.env.ATLAS_URI}`), TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
