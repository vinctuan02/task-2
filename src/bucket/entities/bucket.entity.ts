import { IsNumber } from 'class-validator';
import { BaseEntity } from 'src/database/dto/database.dto';
import { Column, Entity } from 'typeorm';
import { TypeBucket } from '../enum/bucket.enum';

@Entity('bucket')
export class BucketEntity extends BaseEntity {
	@Column({ name: 'type_bucket', enum: TypeBucket })
	typeBucket: TypeBucket;

	@Column()
	keyOnBucket: string;

	@Column({ name: 'bucket_name', nullable: true })
	bucketName: string;

	@Column({ name: 'google_drive_file_id', nullable: true })
	googleDriveFileId: string;

	@Column({ name: 'content_type' })
	contentType: string;

	@Column()
	extension: string;

	@Column({ name: 'file_size_in_byte', type: 'bigint' })
	@IsNumber()
	fileSizeInByte: number;

	@Column({ name: 'file_name' })
	fileName: string;

	@Column({ name: 'is_submit_key', default: false })
	isSubmitKey: boolean;
}
