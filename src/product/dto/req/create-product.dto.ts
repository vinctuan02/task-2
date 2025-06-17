import {
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	IsUUID,
} from 'class-validator';
import { OrientationEnum } from 'src/product/enums/orientation.enum';

export class CreateProductDto {
	@IsOptional()
	source: string;

	@IsOptional()
	@IsNumber()
	width: number;

	@IsOptional()
	@IsNumber()
	height: number;

	@IsOptional()
	@IsNumber()
	frameRate: number;

	@IsOptional()
	@IsNumber()
	duration: number;

	@IsOptional()
	@IsString()
	encoding: string;

	@IsOptional()
	@IsEnum(OrientationEnum)
	orientation: OrientationEnum;

	@IsOptional()
	@IsString()
	// @IsEmpty()
	userCreatorId: string;

	@IsOptional()
	@IsUUID()
	@IsString()
	fileId: string;
}
