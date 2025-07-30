"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheConfigModule = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const redis_1 = require("@keyv/redis");
const keyv_1 = require("keyv");
const cacheable_1 = require("cacheable");
let CacheConfigModule = class CacheConfigModule {
};
exports.CacheConfigModule = CacheConfigModule;
exports.CacheConfigModule = CacheConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.registerAsync({ isGlobal: true,
                useFactory: async () => {
                    return {
                        stores: [
                            new keyv_1.Keyv({
                                store: new cacheable_1.CacheableMemory({ ttl: 12000, lruSize: 5000 }),
                            }),
                            (0, redis_1.createKeyv)(process.env.REDIS_CLOUD),
                        ],
                    };
                },
            }),
        ],
    })
], CacheConfigModule);
//# sourceMappingURL=cache.module.js.map