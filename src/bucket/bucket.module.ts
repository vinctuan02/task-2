import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BucketController } from './bucket.controller';
import { BucketEntity } from './entities/bucket.entity';
import { BucketService } from './services/bucket.service';

@Module({
	imports: [TypeOrmModule.forFeature([BucketEntity])],
	controllers: [BucketController],
	providers: [BucketService],
	exports: [BucketService],
})
export class BucketModule {}
