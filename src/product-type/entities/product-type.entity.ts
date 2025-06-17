import { BaseEntity } from 'src/database/dto/database.dto';
import { OrderProductEntity } from 'src/order-product/entities/order-product.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { FieldType } from '../enum/field-type.enum';

@Entity('product_type')
export class ProductTypeEntity extends BaseEntity {
	@Column({ name: 'name_vi' })
	nameVi: string;

	@Column({ name: 'name_en' })
	nameEn: string;

	@Column({ unique: true })
	code: string;

	@Column({ type: 'varchar', nullable: true })
	note: string | null;

	@Column({ type: 'int', default: 1 })
	order: number;

	@Column()
	color: string;

	@Column({ name: 'file_type', type: 'enum', enum: FieldType })
	fieldType: FieldType;

	@Column({
		name: 'accept_file',
	})
	acceptFile: string;

	@Column({ name: 'is_thumbnail_able', type: 'boolean', default: false })
	isThumbnailable: boolean;

	@Column({
		name: 'google_drive_icon_id',
		nullable: true,
	})
	googleDriveIconId: string;

	@OneToMany(
		() => OrderProductEntity,
		(orderProduct) => orderProduct.productType,
	)
	orderProducts: OrderProductEntity[];
}
