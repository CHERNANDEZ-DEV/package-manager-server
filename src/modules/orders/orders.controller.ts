import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async createOrder(@Body() createOrderDto: CreateOrderDto){
        return this.ordersService.createOrder(createOrderDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllOrders(){
        return this.ordersService.getAllOrders();
    }
}
