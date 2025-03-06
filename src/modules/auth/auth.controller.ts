import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UsersService) {}

    @Post('register')
    async register(@Body() userDto: { name: string; email: string; password: string }){
        return this.usersService.createUser(userDto);
    }

    @Post('login')
    async login(@Body() loginDto: { email: string; password: string }){
        return this.authService.login(loginDto);
    }

}
