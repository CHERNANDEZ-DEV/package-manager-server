import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) { }

  async createOrder(data: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        ...data,
        packages: {
          create: data.packages,
        }
      },
      include: { packages: true },
    })
  }

  async getAllOrders() {
    return this.prisma.order.findMany({
      include: { packages: true },
    });
  }

}
