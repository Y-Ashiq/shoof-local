import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    signIn(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
