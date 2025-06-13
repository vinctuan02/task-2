import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigCustomModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { TopicModule } from './topic/topic.module';

@Module({
	imports: [ConfigCustomModule, DatabaseModule, TopicModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
