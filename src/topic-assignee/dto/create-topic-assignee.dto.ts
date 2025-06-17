import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
// import { TypeOrderProductEnum } from 'src/order-product/enum/type-order-product.enum';

export class CreateTopicAssigneeDto {
	@IsNotEmpty()
	topicId: string;

	@IsOptional()
	assigneeId?: string;

	@IsOptional()
	@IsString()
	productTypeId: string;
}
