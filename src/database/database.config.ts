import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigEntity } from 'src/config/entities/config.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { TopicEntity } from 'src/topic/entities/topic.entity';
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
			entities: [TopicEntity, ConfigEntity, OrderEntity],
			synchronize: true,
			autoLoadEntities: true,
			// timezone: UTC_OFFSET_DB,
		};
	}
}
