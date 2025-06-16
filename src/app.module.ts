import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigCustomModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { OrchertrationModule } from './orchestration/orchertration.module';
import { OrderModule } from './order/order.module';
import { TopicModule } from './topic/topic.module';

@Module({
	imports: [
		ConfigCustomModule,
		DatabaseModule,
		OrchertrationModule,
		TopicModule,
		OrderModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
