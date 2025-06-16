import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderController } from './order.controler';
import { OrderService } from './order.service';

@Module({
	imports: [
		TypeOrmModule.forFeature([OrderEntity]),
		// TopicOrderModule
	],
	controllers: [OrderController],
	providers: [OrderService],
	exports: [OrderService],
})
export class OrderModule {}
