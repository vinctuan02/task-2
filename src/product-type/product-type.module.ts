import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductTypeEntity } from './entities/product-type.entity';
import { ProductTypeController } from './product-type.controller';
import { ProductTypeService } from './product-type.service';

@Module({
	imports: [TypeOrmModule.forFeature([ProductTypeEntity])],
	controllers: [ProductTypeController],
	providers: [ProductTypeService],
	exports: [ProductTypeService],
})
export class ProductTypeModule {}
