import { Controller } from '@nestjs/common';

@Controller('product-types')
export class ProductTypeController {
	// constructor(private readonly productTypeService: ProductTypeService) {}
	// @Post()
	// async create(
	// 	@Body() payload: CreateProductTypeDto,
	// ): Promise<SuccessResDto> {
	// 	await this.productTypeService.create(payload);
	// 	return new SuccessResDto(200, APP_MESSAGE.PRODUCT_TYPE.CREATE_SUCCESS);
	// }
	// @Get()
	// async getList(
	// 	@Query() query: GetListProductTypesDto,
	// ): Promise<SuccessResDto<DataPagination<ProductTypeDto>>> {
	// 	const result = await this.productTypeService.getList(query);
	// 	return new SuccessResDto(200, 'Get list product type success', result);
	// }
	// @Get('get-simple')
	// async getListSimple(
	// 	@Query() query: GetListProductTypesDto,
	// ): Promise<SuccessResDto<DataPagination<SimpleProductTypeDto>>> {
	// 	const result = await this.productTypeService.getListSimple(query);
	// 	return new SuccessResDto(
	// 		200,
	// 		'Get list simple product type success',
	// 		result,
	// 	);
	// }
	// @Get(':id')
	// async findOne(
	// 	@Param('id') id: string,
	// ): Promise<SuccessResDto<ProductTypeDto>> {
	// 	const result = await this.productTypeService.findOnePublic(id);
	// 	return new SuccessResDto(200, 'Get a product type success', result);
	// }
	// @Patch('update-order')
	// async updateOrder(
	// 	@Body() payload: UpdateProductTypeOrderDto,
	// ): Promise<SuccessResDto<null>> {
	// 	await this.productTypeService.updateOrder(payload);
	// 	return new SuccessResDto(200, APP_MESSAGE.PRODUCT_TYPE.UPDATE_SUCCESS);
	// }
	// @Patch(':id')
	// async update(
	// 	@Param('id') id: string,
	// 	@Body() payload: UpdateProductTypeDto,
	// ) {
	// 	await this.productTypeService.update(id, payload);
	// 	return new SuccessResDto(200, APP_MESSAGE.PRODUCT_TYPE.UPDATE_SUCCESS);
	// }
	// @Delete(':id')
	// async remove(@Param('id') id: string): Promise<SuccessResDto> {
	// 	await this.productTypeService.remove(id);
	// 	return new SuccessResDto(200, APP_MESSAGE.PRODUCT_TYPE.DELETE_SUCCESS);
	// }
}
