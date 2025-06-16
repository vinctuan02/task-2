import { IsNotEmpty, IsOptional } from 'class-validator';
import { OrderStatus } from '../enum/order.enum';

export class CreateOrderDto {
	@IsNotEmpty()
	topicId: string;

	@IsOptional()
	content: string;

	@IsOptional()
	note: string;

	@IsNotEmpty()
	deadline: Date;

	@IsOptional()
	status: OrderStatus;
}
