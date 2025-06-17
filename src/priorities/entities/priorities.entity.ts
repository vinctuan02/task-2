import { BaseEntity } from 'src/database/dto/database.dto';
import { OrderEntity } from 'src/order/entities/order.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('priorities')
export class PriorityEntity extends BaseEntity {
	@Column({ name: 'name_vi', type: 'varchar', length: 255 })
	nameVi: string;

	@Column({ name: 'name_en', type: 'varchar', length: 255 })
	nameEn: string;

	@Column({ type: 'int', default: 1 })
	order: number;

	@Column({ type: 'varchar', length: 50, nullable: true })
	color: string;

	@Column({ type: 'text', nullable: true })
	note: string;

	@OneToMany(() => OrderEntity, (order) => order.priority)
	orders: OrderEntity[];
}
