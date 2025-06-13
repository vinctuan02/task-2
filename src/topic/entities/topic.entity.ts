import { BaseEntity } from 'src/database/dto/db.dto';
import { OrderEntity } from 'src/order/entities/order.entity';
import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	Tree,
	TreeChildren,
	TreeParent,
} from 'typeorm';

@Entity('topic')
@Tree('closure-table')
export class TopicEntity extends BaseEntity {
	@TreeParent({ onDelete: 'CASCADE' })
	@JoinColumn({ name: 'parent_id' })
	parent: TopicEntity;

	@TreeChildren({ cascade: true })
	children: TopicEntity[];

	@Column({ unique: true })
	code: string;

	@Column({ type: 'text', nullable: true })
	description: string;

	@Column({ nullable: true })
	note: string;

	@Column({ name: 'code_sort' })
	codeSort: string;

	@OneToMany(() => OrderEntity, (order) => order.topic)
	orders: OrderEntity[];
}
