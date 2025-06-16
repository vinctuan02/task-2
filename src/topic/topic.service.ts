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
import { ISchemaTopic, ISchemaTopicSave } from './interface/topic.interface';
import { FindOneDto } from 'src/database/dto/database.dto';

@Injectable()
export class TopicService {
	constructor(
		@InjectRepository(TopicEntity)
		private readonly topicRepository: TreeRepository<TopicEntity>,
	) { }

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

		let topic: TopicEntity | undefined;
		try {
			topic = await this.findOne({
				where: {
					field: 'code', value: code
				}
			})
		} catch {
			topic = undefined
		}

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

		const topicParent = await this.findOne({
			where: { field: 'id', value: parentId }
		})

		// business
		const { code: newCode, codeSort } =
			await this.genCodeChildren(topicParent);

		return await this.saveTopicToDatabase({
			code: newCode,
			codeSort,
			...data,
		});
	}

	private async saveTopicToDatabase(data: ISchemaTopicSave) {
		const newTopic = this.topicRepository.create(data);

		return await this.topicRepository.save(newTopic);
	}

	private async genCodeChildren(topicParent: ISchemaTopic): Promise<{
		code: string;
		codeSort: string;
	}> {
		let lastChildrenTopic: TopicEntity | undefined;

		try {
			lastChildrenTopic = await this.findOne({
				where: { field: 'parentId', value: topicParent.id },
				order: { by: 'codeSort', value: 'DESC' }
			})
		}
		catch {
			lastChildrenTopic = undefined
		}

		let maxCode = 0;

		if (lastChildrenTopic) {
			const sliceStartIndex = topicParent.code.length;
			maxCode = Number(lastChildrenTopic.code.slice(sliceStartIndex))
		}

		const nextCode = maxCode + 1;
		const nextCodeSort = nextCode
			.toString()
			.padStart(TopicConstant.LENGTH_PAD, '0');

		return {
			code: `${topicParent.code}${nextCode}`,
			codeSort: `${topicParent.code}_${nextCodeSort}`,
		};
	}

	async findOne({
		where,
		order,
	}: FindOneDto): Promise<TopicEntity> {
		const options: any = {
			where: { [where.field]: where.value },
		};

		if (order) {
			options.order = { [order.by]: order.value };
		}

		const topic = await this.topicRepository.findOne(options);

		if (!topic) {
			throw new NotFoundException('Topic not found');
		}

		return topic;
	}
}
