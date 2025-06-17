import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from 'src/order/dto/order.dto';
import { OrderService } from 'src/order/order.service';
import { TopicService } from 'src/topic/topic.service';

@Injectable()
export class OrchestrationService {
	constructor(
		private readonly orderService: OrderService,
		private readonly topicService: TopicService,
	) {}

	async createOrder(data: CreateOrderDto) {
		const { topicId } = data;

		const topic = await this.topicService.findOne({
			where: { field: 'id', value: topicId },
		});

		if (!topic.parentId) {
			throw new BadRequestException('Topic is parent');
		}

		const newOrder = await this.orderService.createOrder({
			topic,
			...data,
		});

		return newOrder;
	}
}
