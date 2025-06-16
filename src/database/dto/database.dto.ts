import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}

export class FindOneDto {
	where: {
		field: string;
		value: string | null | undefined;
	};

	order?: {
		by: string;
		value: 'ASC' | 'DESC';
	};
}
