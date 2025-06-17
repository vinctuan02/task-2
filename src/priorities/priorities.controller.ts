import { Controller } from '@nestjs/common';

@Controller('priorities')
export class PriorityController {
	// constructor(private readonly priorityService: PriorityService) {}
	// @Get()
	// async getList(
	// 	@Query() query: GetListPriorityDto,
	// ): Promise<SuccessResDto<DataPagination<Priority>>> {
	// 	const result = await this.priorityService.getList(query);
	// 	return new SuccessResDto(200, 'Get list priorities success', result);
	// }
	// @Post()
	// async create(@Body() createDto: CreatePriorityDto): Promise<SuccessResDto> {
	// 	await this.priorityService.create(createDto);
	// 	return new SuccessResDto(200, APP_MESSAGE.PRIORITY.CREATE_SUCCESS);
	// }
	// @Patch('update-order')
	// async updateOrder(
	// 	@Body() payload: UpdateOrderPriorityDto,
	// ): Promise<SuccessResDto<null>> {
	// 	await this.priorityService.updateOrder(payload);
	// 	return new SuccessResDto(200, APP_MESSAGE.PRIORITY.UPDATE_SUCCESS);
	// }
	// @Patch(':id')
	// async update(
	// 	@Param('id') id: string,
	// 	@Body() updateDto: UpdatePriorityDto,
	// ) {
	// 	await this.priorityService.update(id, updateDto);
	// 	return new SuccessResDto(200, APP_MESSAGE.PRIORITY.UPDATE_SUCCESS);
	// }
	// @Delete(':id')
	// async delete(@Param('id') id: string) {
	// 	await this.priorityService.delete(id);
	// 	return new SuccessResDto(200, APP_MESSAGE.PRIORITY.DELETE_SUCCESS);
	// }
}
