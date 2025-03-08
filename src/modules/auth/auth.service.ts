import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException('Credenciales invalidas');
    }

    async login(loginDto: { email: string; password: string }) {
        const user = await this.usersService.findByEmail(loginDto.email);
        if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
            throw new UnauthorizedException('Credenciales invalidas');
        }

        const payload = { sub: user.id, email: user.email };

        return {
            access_token: this.jwtService.sign(payload),
            user: { id: user.id, name: user.name, email: user.email }, 
        };
    }
}
