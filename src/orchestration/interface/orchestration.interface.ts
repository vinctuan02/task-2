import { OrderStatus } from 'src/order/enum/order.enum';
import { TopicEntity } from 'src/topic/entities/topic.entity';

export interface ICreateOrder {
	topic: TopicEntity;
	content: string | null;
	note: string | null;
	deadline: Date;
	status: OrderStatus | null;
}
