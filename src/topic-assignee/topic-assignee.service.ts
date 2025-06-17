import { Injectable } from '@nestjs/common';
// import { TopicService } from 'src/topic/services/topic.service';
// import { TopicAssignee } from './entities/topic-assignee.entity';

@Injectable()
export class TopicAssigneeService {
	// constructor(
	// 	@InjectRepository(TopicAssignee)
	// 	private readonly topicAssigneeRepository: Repository<TopicAssignee>,
	// 	private readonly topicService: TopicService,
	// 	private readonly productTypeService: ProductTypeService,
	// ) {}
	// async findAll() {
	// 	return await this.topicAssigneeRepository.find({
	// 		relations: {
	// 			productType: true,
	// 		},
	// 		select: {
	// 			productType: {
	// 				id: true,
	// 				code: true,
	// 				nameVi: true,
	// 				nameEn: true,
	// 			},
	// 		},
	// 	});
	// }
	// // async getAssigneeByTopicId(topicId: string) {
	// // 	return await this.topicAssigneeRepository.find({
	// // 		where: { topicId },
	// // 	});
	// // }
	// async submitAssignee(payload: AssignmentItemDto[]) {
	// 	for (const item of payload) {
	// 		await this.productTypeService.findOne(item.productTypeId);
	// 		await this.topicService.findOne(item.topicId);
	// 		const existing = await this.topicAssigneeRepository.findOne({
	// 			where: {
	// 				topicId: item.topicId,
	// 				productTypeId: item.productTypeId,
	// 			},
	// 		});
	// 		if (existing) {
	// 			if (item.assigneeId !== undefined) {
	// 				if (item.assigneeId === null) {
	// 					existing.assigneeId = null;
	// 				} else {
	// 					existing.assigneeId = item.assigneeId;
	// 				}
	// 			}
	// 			if (item.approverId !== undefined) {
	// 				if (item.approverId === null) {
	// 					existing.approverId = null;
	// 				} else {
	// 					existing.approverId = item.approverId;
	// 				}
	// 			}
	// 			if (item.rate !== undefined) {
	// 				if (item.rate === null || item.rate === 0) {
	// 					existing.rate = 0;
	// 				} else {
	// 					existing.rate = item.rate;
	// 				}
	// 			}
	// 			await this.topicAssigneeRepository.save(existing);
	// 		} else {
	// 			const newEntity = this.topicAssigneeRepository.create(item);
	// 			await this.topicAssigneeRepository.save(newEntity);
	// 		}
	// 	}
	// }
	// async getListAssigneeOfTopic(topicId: string): Promise<TopicAssignee[]> {
	// 	return await this.topicAssigneeRepository
	// 		.createQueryBuilder('topicAssignee')
	// 		.select([
	// 			'topicAssignee.assigneeId',
	// 			'topicAssignee.productTypeId',
	// 			'topicAssignee.approverId',
	// 			'topicAssignee.rate',
	// 			'productType.nameVi',
	// 			'productType.nameEn',
	// 		])
	// 		.leftJoin('topicAssignee.productType', 'productType')
	// 		.where('topicAssignee.topicId = :topicId', { topicId })
	// 		.getMany();
	// }
}
