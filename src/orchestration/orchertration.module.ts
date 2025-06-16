import { Module } from '@nestjs/common';
import { OrderModule } from 'src/order/order.module';
import { TopicModule } from 'src/topic/topic.module';
import { OrchertrationController } from './orchertration.order-controller';
import { OrchertrationService } from './orchertration.service';

@Module({
	imports: [TopicModule, OrderModule],
	controllers: [OrchertrationController],
	providers: [OrchertrationService],
	exports: [OrchertrationService],
})
export class OrchertrationModule {}
