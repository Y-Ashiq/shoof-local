import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';
import { Keyv } from 'keyv';
import { CacheableMemory } from 'cacheable';

@Module({
  imports: [
    CacheModule.registerAsync({isGlobal:true,
      useFactory: async () => {
        return {
          stores: [
            new Keyv({
              store: new CacheableMemory({ ttl: 50000, lruSize: 5000 }),
            }),
            createKeyv(process.env.REDIS_CLOUD),
          ],
        };
      },
    }),
  ],
})
export class CacheConfigModule {}
