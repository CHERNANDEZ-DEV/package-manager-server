import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    async createOrder(@Body() createOrderDto: CreateOrderDto){
        return this.ordersService.createOrder(createOrderDto);
    }

    @Get()
    async getAllOrders(){
        return this.ordersService.getAllOrders();
    }
}
