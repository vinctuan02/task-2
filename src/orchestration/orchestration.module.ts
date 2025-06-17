import { Module } from '@nestjs/common';
import { OrderModule } from 'src/order/order.module';
import { TopicModule } from 'src/topic/topic.module';
import { OrchestrationController } from './orchestration.order-controller';
import { OrchestrationService } from './orchestration.service';

@Module({
	imports: [TopicModule, OrderModule],
	controllers: [OrchestrationController],
	providers: [OrchestrationService],
	exports: [OrchestrationService],
})
export class OrchestrationModule {}
