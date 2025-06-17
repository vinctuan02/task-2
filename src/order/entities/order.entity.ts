import { BaseEntity } from 'src/database/dto/database.dto';
import { OrderProductEntity } from 'src/order-product/entities/order-product.entity';
import { PriorityEntity } from 'src/priorities/entities/priorities.entity';
import { TopicEntity } from 'src/topic/entities/topic.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { OrderStatus } from '../enum/order.enum';

@Entity({ name: 'orders' })
export class OrderEntity extends BaseEntity {
	@Column({ type: 'text', nullable: true })
	content: string | null;

	@Column({ unique: true })
	code: string;

	@Column({ name: 'code_sort' })
	codeSort: string;

	@Column({ nullable: true, type: 'varchar' })
	note: string | null;

	@Column({ type: 'timestamptz' })
	deadline: Date;

	@Column({ name: 'user_creator_id' })
	userCreatorId: string;

	@Column({ name: 'priority_id' })
	priorityId: string;

	@Column({
		type: 'enum',
		enum: OrderStatus,
		default: OrderStatus.NEW,
		nullable: false,
	})
	status: OrderStatus;

	@Column({ name: 'topic_id' })
	topicId: string;

	@ManyToOne(() => TopicEntity, (topic) => topic.orders, {})
	@JoinColumn({ name: 'topic_id' })
	topic: TopicEntity;

	@ManyToOne(() => PriorityEntity, (priorities) => priorities.orders, {})
	@JoinColumn({ name: 'priority_id' })
	priority: PriorityEntity;

	@OneToMany(() => OrderProductEntity, (orderProduct) => orderProduct.order)
	orderProducts: OrderProductEntity[];
}
