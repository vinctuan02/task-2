import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from 'src/order/dto/order.dto';
import { OrchestrationService } from './orchestration.service';

@Controller('order')
export class OrchestrationController {
	constructor(private readonly orchestrationService: OrchestrationService) {}

	@Post()
	async createOrder(@Body() data: CreateOrderDto) {
		return await this.orchestrationService.createOrder(data);
	}
}
