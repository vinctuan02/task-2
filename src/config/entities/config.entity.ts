import { BaseEntity } from 'src/database/dto/db.dto';
import { Entity } from 'typeorm';

@Entity('config')
export class ConfigEntity extends BaseEntity {}
