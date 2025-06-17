import { Controller } from '@nestjs/common';
// import { SuccessResDto } from 'src/common/dtos/success-response.dto';
import { TopicAssigneeService } from './topic-assignee.service';

@Controller('topic-assignee')
export class TopicAssigneeController {
	constructor(private readonly topicAssigneeService: TopicAssigneeService) {}

	// @Get()
	// async findAll() {
	// 	const allTopicAssignee = await this.topicAssigneeService.findAll();
	// 	return new SuccessResDto(
	// 		200,
	// 		'Get all topic assignee oke',
	// 		allTopicAssignee,
	// 	);
	// }

	// @Post('submit-assignee')
	// async submitAssignee(@Body() body: AssignmentItemDto[]) {
	// 	await this.topicAssigneeService.submitAssignee(body);
	// 	return new SuccessResDto(200, 'Submit topic assignee oke');
	// }
}
