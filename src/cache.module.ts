import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';
import { Keyv } from 'keyv';
import { CacheableMemory } from 'cacheable';

@Module({
   imports: [
    CacheModule.register({
      isGlobal:true,
      ttl: 300000, // seconds
      max: 100, // max items in cache
    }),
  ],
})
export class CacheConfigModule {}
