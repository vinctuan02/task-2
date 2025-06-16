import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TreeRepository } from 'typeorm';

import { FindOneDto } from 'src/database/dto/database.dto';
import { CreateTopicDto } from './dto/topic.dto';
import { TopicEntity } from './entities/topic.entity';
import { TopicConstant } from './enum/topic.enum';
import { ISchemaTopicSave } from './interface/topic.interface';

@Injectable()
export class TopicService {
	constructor(
		@InjectRepository(TopicEntity)
		private readonly topicRepository: TreeRepository<TopicEntity>,
	) {}

	async createTopic(data: CreateTopicDto): Promise<TopicEntity> {
		const { parentId } = data;

		if (parentId) {
			return await this.handleCreateChildTopic(data);
		} else {
			return await this.handleCreateParentTopic(data);
		}
	}

	private async handleCreateParentTopic(
		data: CreateTopicDto,
	): Promise<TopicEntity> {
		const { code } = data;
		if (!code) {
			throw new BadRequestException(
				'Code when creating parent theme is required',
			);
		}

		const topic = await this.findOne({
			where: { field: 'code', value: code },
		});

		if (topic) {
			throw new BadRequestException('Code already exists');
		}

		return await this.saveTopicToDatabase({
			code,
			codeSort: code,
			...data,
		});
	}

	private async handleCreateChildTopic(
		data: CreateTopicDto,
	): Promise<TopicEntity> {
		const { parentId, code } = data;

		// validate
		if (code) {
			throw new BadRequestException('Child theme code is by gene system');
		}

		await this.findOne({
			where: { field: 'id', value: parentId },
			throwErrorIfExist: true,
		});

		if (parentId) {
			throw new BadRequestException('');
		}

		// business
		const { code: newCode, codeSort } =
			await this.genCodeChildren(parentId);

		return await this.saveTopicToDatabase({
			code: newCode,
			codeSort,
			...data,
		});
	}

	private async saveTopicToDatabase(data: ISchemaTopicSave) {
		const newTopic = this.topicRepository.create(data);

		const savedTopics = await this.topicRepository.save(newTopic);

		return savedTopics[0];
	}

	async findOne({
		where,
		order,
		throwErrorIfExist,
	}: FindOneDto): Promise<TopicEntity> {
		const options: any = {
			where: { [where.field]: where.value },
		};

		if (order) {
			options.order = { [order.by]: order.value };
		}

		const topic = await this.topicRepository.findOne(options);

		if (throwErrorIfExist && !topic) {
			throw new NotFoundException('Topic not found');
		}

		return topic;
	}

	private async genCodeChildren(topicParentId: string): Promise<{
		code: string;
		codeSort: string;
	}> {
		const topicParent = await this.findOne({
			where: { field: 'id', value: topicParentId },
		});

		const maxCode = await this.getMaxCode(topicParentId);

		const nextCode = maxCode + 1;
		const nextCodeSort = nextCode
			.toString()
			.padStart(TopicConstant.LENGTH_PAD, '0');

		return {
			code: `${topicParent.code}${nextCode}`,
			codeSort: `${topicParent.code}_${nextCodeSort}`,
		};
	}

	private async getMaxCode(topicParentId: string) {
		const topicParent = await this.findOne({
			where: { field: 'id', value: topicParentId },
		});

		const lastChildrenTopic = await this.findOne({
			where: { field: 'parentId', value: topicParentId },
			order: {
				by: 'codeSort',
				value: 'DESC',
			},
		});

		if (!lastChildrenTopic) {
			return 0;
		} else {
			const sliceStartIndex = topicParent.code.length;
			return Number(lastChildrenTopic.code.slice(sliceStartIndex));
		}
	}
}
