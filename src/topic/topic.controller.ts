import { Controller } from '@nestjs/common';
import { TopicService } from './topic.service';

@Controller()
export class TopicController {
	constructor(private readonly topicService: TopicService) {}
}
