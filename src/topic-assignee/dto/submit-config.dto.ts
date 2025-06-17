import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// export class SubmitConfigDto {
// 	@IsArray()
// 	@ValidateNested({ each: true })
// 	@Type(() => AssignmentItemDto)
// 	items: AssignmentItemDto[];
// }

export class AssignmentItemDto {
	@IsNotEmpty()
	topicId: string;

	@IsOptional()
	assigneeId?: string | null;

	@IsOptional()
	approverId?: string | null;

	@IsString()
	@IsNotEmpty()
	productTypeId: string;

	@IsOptional()
	rate?: number | null;
}
