import { BaseEntity } from 'src/database/dto/db.dto';
import { TopicEntity } from 'src/topic/entities/topic.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { OrderStatus } from '../enum/order.enum';

@Entity({ name: 'orders' })
export class OrderEntity extends BaseEntity {
	@Column({ type: 'text', nullable: true })
	content: string;

	@Column({ unique: true })
	code: string;

	@Column({ name: 'code_sort', nullable: true })
	codeSort: string;

	@Column({ nullable: true })
	note: string;

	@Column({ type: 'datetime' })
	deadline: Date;

	@Column({ name: 'user_creator_id' })
	userCreatorId: string;

	@Column({
		type: 'enum',
		enum: OrderStatus,
		default: OrderStatus.NEW,
	})
	status: OrderStatus;

	@Column({ name: 'topic_id' })
	topicId: string;

	@ManyToOne(() => TopicEntity, (topic) => topic.orders, {})
	@JoinColumn({ name: 'topic_id' })
	topic: TopicEntity;
}
