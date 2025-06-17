import { BaseEntity } from 'src/database/dto/database.dto';
import { OrderProductEntity } from 'src/order-product/entities/order-product.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('review')
export class ReviewEntity extends BaseEntity {
	@Column('varchar', { length: 500 })
	comment: string;

	@Column({ type: 'int', nullable: true })
	rate: number;

	@Column({ name: 'user_creator_id' })
	userCreatorId: string;

	@Column({ name: 'order_product_id' })
	orderProductId: string;

	@ManyToOne(
		() => OrderProductEntity,
		(orderProduct) => orderProduct.reviews,
		{
			onDelete: 'CASCADE',
		},
	)
	@JoinColumn({ name: 'order_product_id' })
	orderProduct: OrderProductEntity;
}
