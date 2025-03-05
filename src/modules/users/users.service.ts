import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: { name: string; email: string; password: string }){
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.user.create({
            data: {
                ...data,
                password: hashedPassword,
            },
        });
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

}
