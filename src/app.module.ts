import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './brands/brands.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TagsModule } from './tags/tags.module';
import { AuthModule } from './auth/auth.module';
import { CacheConfigModule } from './cache.module';

@Module({
  imports: [
    BrandsModule,
    MongooseModule.forRoot(`${process.env.ATLAS_URI}`),
    TagsModule,
    AuthModule,
    CacheConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
