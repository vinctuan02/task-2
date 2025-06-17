import {
	IsBoolean,
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';
import { FieldType } from 'src/product-type/enum/field-type.enum';

export class CreateProductTypeDto {
	@IsString()
	@IsNotEmpty()
	nameVi: string;

	@IsString()
	@IsNotEmpty()
	nameEn: string;

	@IsString()
	@IsNotEmpty()
	code: string;

	@IsString()
	@IsOptional()
	note?: string;

	@IsOptional()
	@IsNumber()
	order: number;

	@IsString()
	@IsNotEmpty()
	color: string;

	@IsString()
	@IsEnum(FieldType)
	@IsNotEmpty()
	fieldType: FieldType;

	// @IsString()
	// @IsOptional()
	// @IsEnum(TypeAcceptFile)
	// acceptFile?: TypeAcceptFile;

	@IsString()
	@IsNotEmpty()
	acceptFile: string;

	@IsOptional()
	@IsBoolean()
	isThumbnailable: boolean;

	@IsNotEmpty()
	googleDriveIconId: string;
}
