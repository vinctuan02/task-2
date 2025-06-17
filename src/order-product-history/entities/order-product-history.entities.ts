import { BaseEntity } from 'src/database/dto/database.dto';
import { OrderProductEntity } from 'src/order-product/entities/order-product.entity';
import { OrderProductStatus } from 'src/order-product/enum/order-product.enum';
import { ProductTypeEntity } from 'src/product-type/entities/product-type.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'order_product_history' })
export class OrderProductHistoryEntity extends BaseEntity {
	@Column({ name: 'order_product_id' })
	orderProductId: string;

	@Column({ name: 'google_drive_file_id', nullable: true })
	googleDriveFileId: string;

	@Column({ type: 'enum', enum: OrderProductStatus })
	status: OrderProductStatus;

	@Column({
		name: 'product_type_id',
		type: 'varchar',
		// length: 36,
	})
	productTypeId: string;

	@ManyToOne(() => ProductTypeEntity, { eager: false })
	@JoinColumn({ name: 'product_type_id' })
	productType: ProductTypeEntity;

	@Column({ name: 'user_creator_id' })
	userCreatorId: string;

	@ManyToOne(
		() => OrderProductEntity,
		(orderProduct) => orderProduct.orderProductHistorys,
		{ onDelete: 'CASCADE' },
	)
	@JoinColumn({ name: 'order_product_id' })
	orderProduct: OrderProductEntity;
}
