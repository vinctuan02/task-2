import { Controller } from '@nestjs/common';

@Controller('product')
export class ProductController {
	// constructor(private readonly productService: ProductService) {}
	// @Post()
	// async createProduct(
	// 	@Body() createProductDto: CreateProductDto,
	// 	// @Request() req: RequestWithUser,
	// ): Promise<SuccessResDto<Product>> {
	// 	// const userId: string = '38306fb4-3e40-4dc1-9411-6b4e17b59d12'; // fix
	// 	const result = await this.productService.create(createProductDto);
	// 	return new SuccessResDto(
	// 		201,
	// 		APP_MESSAGE.PRODUCT.CREATE_SUCCESS,
	// 		result,
	// 	);
	// }
	// @Get(':id')
	// async findOne(@Param('id') id: string): Promise<SuccessResDto<Product>> {
	// 	const result = await this.productService.findOne(id);
	// 	return new SuccessResDto(
	// 		200,
	// 		APP_MESSAGE.PRODUCT.GET_BY_ID_SUCCESS,
	// 		result,
	// 	);
	// }
	// @Get()
	// async findAll(
	// 	@Query() query: GetAllProductsDto,
	// ): Promise<SuccessResDto<DataPagination<Product>>> {
	// 	const result = await this.productService.findAll(query);
	// 	return new SuccessResDto(
	// 		200,
	// 		APP_MESSAGE.PRODUCT.GET_ALL_SUCCESS,
	// 		result,
	// 	);
	// }
	// @ApiOperation({ summary: 'Update a order' })
	// @ApiParam({
	// 	name: 'id',
	// 	required: true,
	// 	example: '4ac9a511-1d81-473e-a4bc-0290a7ae6506',
	// })
	// @Patch(':id')
	// async update(
	// 	@Param('id') id: string,
	// 	@Body() updateOrderDto: UpdateOrderDto,
	// ): Promise<SuccessResDto<Order>> {
	// 	const result = await this.orderService.update(id, updateOrderDto);
	// 	return new SuccessResDto(200, APP_MESSAGE.ORDER.UPDATE_SUCCESS, result);
	// }
	// @ApiOperation({ summary: 'Delete order' })
	// @ApiParam({
	// 	name: 'id',
	// 	required: true,
	// 	example: '4ac9a511-1d81-473e-a4bc-0290a7ae6506',
	// })
	// @Delete(':id')
	// async remove(@Param('id') id: string): Promise<SuccessResDto<boolean>> {
	// 	await this.orderService.remove(id);
	// 	return new SuccessResDto(204, APP_MESSAGE.ORDER.DELETE_SUCCESS);
	// }
}
