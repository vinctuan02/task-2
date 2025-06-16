import { BaseEntity } from 'src/database/dto/database.dto';
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

	@Column({ name: 'parent_id', nullable: true, type: 'varchar' })
	parentId?: string | null;

	@Column({ unique: true })
	code: string;

	@Column({ type: 'text', nullable: true })
	description?: string | null;

	@Column({ nullable: true, type: 'varchar' })
	note?: string | null;

	@Column({ name: 'code_sort' })
	codeSort: string;

	@OneToMany(() => OrderEntity, (order) => order.topic)
	orders: OrderEntity[];
}
