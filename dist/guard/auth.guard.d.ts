import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthGuard implements CanActivate {
    private readonly apiKey;
    canActivate(context: ExecutionContext): boolean;
}
