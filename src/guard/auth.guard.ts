import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly apiKey = process.env.ADMIN_KEY;
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    const apiKeyHeader = request.headers['x-api-key'];

    if (apiKeyHeader === this.apiKey) {
      return true;
    }
    throw new UnauthorizedException('UnAuthorized');
  }
}
