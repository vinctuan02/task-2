import { BaseEntity } from 'src/database/dto/database.dto';
import { OrderProductHistoryEntity } from 'src/order-product-history/entities/order-product-history.entities';
import { OrderEntity } from 'src/order/entities/order.entity';
import { ProductTypeEntity } from 'src/product-type/entities/product-type.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { ReviewEntity } from 'src/review/entity/review.entity';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
} from 'typeorm';
import { OrderProductStatus } from '../enum/order-product.enum';

@Entity({ name: 'order_product' })
export class OrderProductEntity extends BaseEntity {
	@Column({ name: 'order_id' })
	orderId: string;

	@Column({ type: 'text', nullable: true })
	description: string;

	@Column({ nullable: true })
	note: string;

	@Column({ name: 'assignee_id', type: 'varchar', nullable: true })
	assigneeId: string | null;

	@Column({ name: 'approver_id', type: 'varchar', nullable: true })
	approverId: string | null;

	@Column({ type: 'int', nullable: true })
	rate: number | null;

	@Column({ type: 'int', default: 0, name: 'count_upload_product' })
	countUploadProduct: number;

	@Column({
		type: 'enum',
		enum: OrderProductStatus,
		default: OrderProductStatus.NEW,
	})
	status: OrderProductStatus;

	@Column({
		type: 'enum',
		enum: OrderProductStatus,
		nullable: true,
		name: 'old_status',
	})
	oldStatus: OrderProductStatus | null;

	@Column({ name: 'product_id', nullable: true })
	productId: string;

	@Column({
		name: 'product_type_id',
		type: 'varchar',
		// length: 36,
		// nullable: true,
	})
	productTypeId: string;

	@ManyToOne(() => ProductTypeEntity, { eager: false })
	@JoinColumn({ name: 'product_type_id' })
	productType: ProductTypeEntity;

	@ManyToOne(() => OrderEntity, (order) => order.orderProducts, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'order_id' })
	order: OrderEntity;

	@OneToOne(() => ProductEntity, (product) => product.orderProduct, {
		// eager: false
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'product_id' })
	product: ProductEntity;

	@OneToMany(() => ReviewEntity, (review) => review.orderProduct)
	reviews: ReviewEntity[];

	@OneToMany(
		() => OrderProductHistoryEntity,
		(orderProductHistory) => orderProductHistory.orderProduct,
	)
	orderProductHistorys: OrderProductHistoryEntity[];
}
