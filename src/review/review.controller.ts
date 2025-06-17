import { Controller } from '@nestjs/common';

@Controller('review')
export class ReviewController {
	// constructor(private readonly reviewService: ReviewService) {}
	// @Post()
	// async create(
	// 	@Body() createReviewDto: CreateReviewDto,
	// 	@Req() req: Request,
	// ): Promise<SuccessResDto> {
	// 	await this.reviewService.create(createReviewDto, req);
	// 	return new SuccessResDto(200, APP_MESSAGE.REVIEW.CREATE_SUCCESS);
	// }
	// @Get('order/:orderId')
	// async getListReviewsByOrderId(
	// 	@Param('orderId') orderId: string,
	// 	@Query() query: GetListReviewsOfOrder,
	// ): Promise<SuccessResDto<Review[]>> {
	// 	const result = await this.reviewService.getListReviewsByOrderId(
	// 		orderId,
	// 		query,
	// 	);
	// 	return new SuccessResDto(
	// 		200,
	// 		APP_MESSAGE.REVIEW.GET_BY_ORDER_ID_SUCCESS,
	// 		result,
	// 	);
	// }
}
