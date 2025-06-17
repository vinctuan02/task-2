import { PickType } from '@nestjs/mapped-types';
import { Expose } from 'class-transformer';
import { TypeAcceptFile } from 'src/product-type/enum/accept-file.enum';
import { FieldType } from 'src/product-type/enum/field-type.enum';

export class ProductTypeDto {
	@Expose()
	id: string;

	@Expose()
	nameVi: string;

	@Expose()
	nameEn: string;

	@Expose()
	note?: string;

	@Expose()
	order: number;

	@Expose()
	code: string;

	@Expose()
	color: string;

	@Expose()
	fieldType: FieldType;

	@Expose()
	acceptFile?: TypeAcceptFile;

	@Expose()
	googleDriveIconId: string;

	@Expose()
	isThumbnailable: string;

	@Expose()
	dateCreated: Date;

	@Expose()
	dateUpdated: Date;
}

export class ProductTypeWithCountProductDto extends ProductTypeDto {
	@Expose()
	productCount: number;
}

export class SimpleProductTypeDto extends PickType(ProductTypeDto, [
	'id',
	'nameVi',
	'nameEn',
	'acceptFile',
	'fieldType',
	'color',
	'googleDriveIconId',
	'isThumbnailable',
	// 'dateCreated',
	// 'dateUpdated',
]) {}

export class ProductTypeName extends PickType(ProductTypeDto, [
	'nameVi',
	'nameEn',
]) {}
