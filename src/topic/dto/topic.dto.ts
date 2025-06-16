import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class CreateTopicDto {
	@IsOptional()
	@Transform(({ value }) => value?.trim())
	@IsNotEmpty()
	parentId?: string | null;

	@IsOptional()
	@Transform(({ value }) => value?.trim())
	@Matches(/^\S+$/, {
		message: 'Whitespace is not allowed',
	})
	code?: string;

	@IsOptional()
	description?: string | null;

	@IsOptional()
	note?: string | null;
}
