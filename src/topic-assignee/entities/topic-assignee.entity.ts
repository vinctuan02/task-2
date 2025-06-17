import { BaseEntity } from 'src/database/dto/database.dto';
import { ProductTypeEntity } from 'src/product-type/entities/product-type.entity';
import { TopicEntity } from 'src/topic/entities/topic.entity';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	Unique,
} from 'typeorm';

@Entity('topic_assignee')
@Unique(['productTypeId', 'topicId'])
export class TopicAssigneeEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', name: 'topic_id', nullable: true })
	topicId: string | null;

	@Column({
		name: 'product_type_id',
		type: 'varchar',
		length: 36,
	})
	productTypeId: string;

	@Column({ type: 'varchar', name: 'assignee_id', nullable: true })
	assigneeId: string | null;

	@Column({ type: 'varchar', name: 'approver_id', nullable: true })
	approverId: string | null;

	@Column({ type: 'int', nullable: true })
	rate: number | null;

	@ManyToOne(() => ProductTypeEntity, { eager: false })
	@JoinColumn({ name: 'product_type_id' })
	productType: ProductTypeEntity;

	@ManyToOne(() => TopicEntity, { eager: false })
	@JoinColumn({ name: 'topic_id' })
	topic: TopicEntity;
}
