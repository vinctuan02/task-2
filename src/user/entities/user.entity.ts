import { BaseEntity } from 'src/database/dto/database.dto';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
	@Column({ name: 'user_name', type: 'varchar', unique: true })
	userName: string;

	@Column({ name: 'password', type: 'varchar' })
	password: string;
}
