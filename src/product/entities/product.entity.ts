import { BucketEntity } from 'src/bucket/entities/bucket.entity';
import { BaseEntity } from 'src/database/dto/database.dto';
import { OrderProductEntity } from 'src/order-product/entities/order-product.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { OrientationEnum } from '../enums/orientation.enum';

@Entity('product')
export class ProductEntity extends BaseEntity {
	@Column({ nullable: true })
	width: number;

	@Column({ nullable: true })
	height: number;

	@Column({ name: 'frame_rate', type: 'float', nullable: true })
	frameRate: number;

	@Column({ nullable: true })
	duration: number;

	@Column({ nullable: true })
	encoding: string;

	@Column({
		type: 'enum',
		enum: OrientationEnum,
		nullable: true,
		default: OrientationEnum.HORIZONTAL,
	})
	orientation: OrientationEnum;

	@Column({ name: 'bucket_id', nullable: true })
	bucket_id: string;

	@Column({ name: 'user_creator_id', nullable: true })
	userCreatorId: string;

	@Column({ name: 'source', nullable: true })
	source: string;

	@OneToOne(
		() => OrderProductEntity,
		(orderProduct) => orderProduct.product,
		{
			onDelete: 'CASCADE',
		},
	)
	orderProduct: OrderProductEntity;

	@OneToOne(() => BucketEntity, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'bucket_id' })
	bucket: BucketEntity;
}
