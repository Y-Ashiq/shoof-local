import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    
    if (
      username !== process.env.username &&
      password !== process.env.password
    ) {
      throw new UnauthorizedException('wrong username or password');
    }

    const payload = { username };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
