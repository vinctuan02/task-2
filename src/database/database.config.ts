import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { BucketEntity } from 'src/bucket/entities/bucket.entity';
import { ConfigEntity } from 'src/config/entities/config.entity';
import { OrderProductHistoryEntity } from 'src/order-product-history/entities/order-product-history.entities';
import { OrderProductEntity } from 'src/order-product/entities/order-product.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { PriorityEntity } from 'src/priorities/entities/priorities.entity';
import { ProductTypeEntity } from 'src/product-type/entities/product-type.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { ReviewEntity } from 'src/review/entity/review.entity';
import { TopicEntity } from 'src/topic/entities/topic.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { DBType } from './enum/database.type.enum';
@Injectable()
export class DatabaseOptions implements TypeOrmOptionsFactory {
	constructor(private configService: ConfigService) {}

	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			type: this.configService.get<DBType>('DB_TYPE')!,
			host: this.configService.get<string>('DB_HOST'),
			port: this.configService.get<number>('DB_PORT'),
			username: this.configService.get<string>('DB_USER'),
			password: this.configService.get<string>('DB_PASS'),
			database: this.configService.get<string>('DB_NAME'),
			// entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
			entities: [
				TopicEntity,
				ConfigEntity,
				OrderEntity,
				PriorityEntity,
				OrderProductEntity,
				ProductTypeEntity,
				OrderProductHistoryEntity,
				ProductEntity,
				BucketEntity,
				ReviewEntity,
				UserEntity,
			],
			synchronize: true,
			autoLoadEntities: true,
			// timezone: UTC_OFFSET_DB,
		};
	}
}
