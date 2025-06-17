import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriorityEntity } from './entities/priorities.entity';
import { PriorityController } from './priorities.controller';
import { PriorityService } from './priorities.service';

@Module({
	imports: [TypeOrmModule.forFeature([PriorityEntity])],
	controllers: [PriorityController],
	providers: [PriorityService],
	exports: [PriorityService],
})
export class PriorityModule {}
