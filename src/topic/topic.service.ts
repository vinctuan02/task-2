import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TreeRepository } from 'typeorm';
import { TopicEntity } from './entities/topic.entity';

@Injectable()
export class TopicService {
	constructor(
		@InjectRepository(TopicEntity)
		private readonly topicRepository: TreeRepository<TopicEntity>,
	) {}
}
