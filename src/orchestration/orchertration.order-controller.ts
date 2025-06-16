import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from 'src/order/dto/order.dto';
import { OrchertrationService } from './orchertration.service';

@Controller('order')
export class OrchertrationController {
	constructor(private readonly orchertrationService: OrchertrationService) {}

	@Post()
	async createOrder(@Body() data: CreateOrderDto) {
		return await this.orchertrationService.createOrder(data);
	}
}
