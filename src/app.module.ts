import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigCustomModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { JwtModule } from './jwt/jwt.module';
import { OrchestrationModule } from './orchestration/orchestration.module';
import { OrderModule } from './order/order.module';
import { TopicModule } from './topic/topic.module';

@Module({
	imports: [
		ConfigCustomModule,
		DatabaseModule,
		OrchestrationModule,
		TopicModule,
		OrderModule,
		AuthModule,
		JwtModule,
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_GUARD,
			useClass: JwtAuthGuard,
		},
	],
})
export class AppModule {}
