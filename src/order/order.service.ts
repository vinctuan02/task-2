import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateOrder } from 'src/orchestration/interface/orchertration.interface';
import { ISchemaTopic } from 'src/topic/interface/topic.interface';
import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderConstant, OrderStatus } from './enum/order.enum';
import { ISchemaOrderSave } from './interface/order.interface';

@Injectable()
export class OrderService {
	constructor(
		@InjectRepository(OrderEntity)
		private readonly orderRepository: Repository<OrderEntity>,
	) {}

	async createOrder(data: ICreateOrder) {
		const { topic, status, ...otherData } = data;
		const { code, codeSort } = await this.genCodeOrder(topic);

		console.log(otherData);

		await this.saveOrderToDatabase({
			code,
			codeSort,
			userCreatorId: 'hi',
			topicId: topic.id,
			status: status ?? OrderStatus.NEW,
			...otherData,
		});
	}

	async saveOrderToDatabase(data: ISchemaOrderSave) {
		console.log(data);
		const newOrder = this.orderRepository.create(data);

		console.log(newOrder);

		const a = await this.orderRepository.save(newOrder);
		console.log(a);
	}

	private async genCodeOrder(topic: ISchemaTopic) {
		const order = await this.orderRepository.findOne({
			where: { topicId: topic.id },
			order: { codeSort: 'DESC' },
			relations: ['topic'],
		});

		const sliceStartIndex = topic.code.length + '_'.length;

		let maxCode: number = 0;
		if (order) {
			maxCode = Number(order.code.slice(sliceStartIndex));
		}

		const nextCode = maxCode + 1;
		const nextCodeSort = nextCode
			.toString()
			.padStart(OrderConstant.LENGTH_PAD, '0');

		return {
			code: `${topic.code}_${nextCode}`,
			codeSort: `${topic.codeSort}_${nextCodeSort}`,
		};
	}
}
