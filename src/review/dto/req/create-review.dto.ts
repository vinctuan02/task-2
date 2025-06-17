// import {
// 	IsNotEmpty,
// 	IsNumber,
// 	IsOptional,
// 	IsString,
// 	IsUUID,
// 	Max,
// 	MaxLength,
// 	Min,
// } from 'class-validator';
// import { LENGTH_FILED_500 } from 'src/common/constants/common.constant';
// import { APP_MESSAGE } from 'src/common/message/app.message';

// export class CreateReviewDto {
// 	@IsString()
// 	@IsNotEmpty()
// 	@MaxLength(LENGTH_FILED_500)
// 	comment: string;

// 	@IsOptional()
// 	@IsNumber()
// 	@Min(1, { message: APP_MESSAGE.REVIEW.MIN_RATE })
// 	@Max(10, { message: APP_MESSAGE.REVIEW.MAX_RATE })
// 	rate?: number;

// 	// @IsUUID()
// 	// @IsNotEmpty()
// 	// userCreatorId: string;

// 	@IsNotEmpty()
// 	@IsUUID()
// 	orderProductId: string;
// }
