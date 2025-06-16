import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TreeRepository } from 'typeorm';

import { CreateTopicDto } from './dto/topic.dto';
import { TopicEntity } from './entities/topic.entity';
import { TopicConstant } from './enum/topic.enum';
import { ISchemaTopic } from './interface/topic.interface';

@Injectable()
export class TopicService {
	constructor(
		@InjectRepository(TopicEntity)
		private readonly topicRepository: TreeRepository<TopicEntity>,
	) {}

	async createTopic(data: CreateTopicDto): Promise<ISchemaTopic> {
		const { parentId } = data;

		if (parentId) {
			return await this.handleCreateChildTopic(data);
		} else {
			return await this.handleCreateParentTopic(data);
		}
	}

	private async handleCreateParentTopic(data: CreateTopicDto) {
		const { code } = data;
		if (!code) {
			throw new BadRequestException(
				'Code when creating parent theme is required',
			);
		}

		const topic = await this.findOne({
			fieldName: 'code',
			value: code,
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

	private async handleCreateChildTopic(data: CreateTopicDto) {
		const { parentId, code } = data;

		if (code) {
			throw new BadRequestException('Child theme code is by gene system');
		}

		const { code: newCode, codeSort } =
			await this.genCodeChildren(parentId);

		return await this.saveTopicToDatabase({
			code: newCode,
			codeSort,
			...data,
		});
	}

	private async saveTopicToDatabase(data: ISchemaTopic) {
		const newTopic = this.topicRepository.create(data);
		return this.topicRepository.save(newTopic);
	}

	private async findOne({
		fieldName,
		value,
		orderBy,
		order,
		throwError,
	}: {
		fieldName: string;
		value: any;
		orderBy?: string;
		order?: 'ASC' | 'DESC';
		throwError?: boolean;
	}): Promise<TopicEntity> {
		const options: any = {
			where: { [fieldName]: value },
		};

		if (orderBy && order) {
			options.order = { [orderBy]: order };
		}

		const topic = await this.topicRepository.findOne(options);

		if (!topic && throwError) {
			throw new NotFoundException('Topic not found');
		}

		return topic;
	}

	private async genCodeChildren(topicParentId: string): Promise<{
		code: string;
		codeSort: string;
	}> {
		const topicParent = await this.findOne({
			fieldName: 'id',
			value: topicParentId,
			throwError: true,
		});

		const lastChildrenTopic = await this.findOne({
			fieldName: 'parentId',
			value: topicParentId,
			orderBy: 'codeSort',
			order: 'DESC',
		});

		let maxCode: number;
		const sliceStartIndex = topicParent.code.length + '_'.length;

		if (!lastChildrenTopic) {
			maxCode = 0;
		} else {
			maxCode = Number(lastChildrenTopic.codeSort.slice(sliceStartIndex));
		}

		const codeResult = maxCode + 1;

		const codeResultString = codeResult
			.toString()
			.padStart(TopicConstant.LENGTH_PAD, '0');

		return {
			code: `${topicParent.code}_${codeResult}`,
			codeSort: `${topicParent.code}_${codeResultString}`,
		};
	}
}
