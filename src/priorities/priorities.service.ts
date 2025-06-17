import { Injectable } from '@nestjs/common';

@Injectable()
export class PriorityService {
	// constructor(
	// 	@InjectRepository(Priority)
	// 	private priorityRepository: Repository<Priority>,
	// ) {}
	// async getList(
	// 	query: GetListPriorityDto,
	// ): Promise<DataPagination<Priority>> {
	// 	const {
	// 		page,
	// 		//  pageSize, skip
	// 	} = query;
	// 	const queryBuilder = this.priorityRepository
	// 		.createQueryBuilder('priority')
	// 		.select('priority')
	// 		.loadRelationCountAndMap('priority.orderCount', 'priority.orders')
	// 		.orderBy('`order`');
	// 	// .skip(skip)
	// 	// .take(pageSize);
	// 	const [listPriority, totalItems] = await queryBuilder.getManyAndCount();
	// 	// const totalPages = Math.ceil(totalItems / pageSize);
	// 	const metadata = new MetadataDto(page, totalItems, totalItems);
	// 	return new DataPagination(listPriority, metadata);
	// }
	// async findOne(id: string): Promise<Priority> {
	// 	const priority = await this.priorityRepository.findOneBy({ id });
	// 	if (!priority) throw new NotFoundException('Priority not found');
	// 	return priority;
	// }
	// async create(dto: CreatePriorityDto): Promise<Priority> {
	// 	const priority = this.priorityRepository.create(dto);
	// 	return this.priorityRepository.save(priority);
	// }
	// async updateOrder(payload: UpdateOrderPriorityDto) {
	// 	const { data } = payload;
	// 	if (!data) {
	// 		throw new BadRequestException('Invalid input');
	// 	}
	// 	const updatePromises = data.map(({ id, order }) =>
	// 		this.priorityRepository
	// 			.createQueryBuilder()
	// 			.update(Priority)
	// 			.set({ order })
	// 			.where('id = :id', { id })
	// 			.execute(),
	// 	);
	// 	await Promise.all(updatePromises);
	// }
	// async update(id: string, dto: UpdatePriorityDto): Promise<Priority> {
	// 	const priority = await this.findOne(id);
	// 	Object.assign(priority, dto);
	// 	return this.priorityRepository.save(priority);
	// }
	// async delete(id: string): Promise<void> {
	// 	const result = await this.priorityRepository.delete(id);
	// 	if (!result.affected) throw new NotFoundException('Priority not found');
	// }
}
