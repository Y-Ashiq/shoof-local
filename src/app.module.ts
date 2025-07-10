import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './brands/brands.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ BrandsModule, MongooseModule.forRoot('mongodb://localhost/shoof')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
