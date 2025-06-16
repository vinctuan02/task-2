import { Body, Controller, Post } from '@nestjs/common';
import { CreateTopicDto } from './dto/topic.dto';
import { ISchemaTopic } from './interface/topic.interface';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
	constructor(private readonly topicService: TopicService) {}

	@Post()
	async createTopic(
		@Body() createTopic: CreateTopicDto,
	): Promise<ISchemaTopic> {
		return await this.topicService.createTopic(createTopic);
	}
}
