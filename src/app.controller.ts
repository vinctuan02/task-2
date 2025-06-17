import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	// @UseGuards(JwtAuthGuard)
	helloWord() {
		return 'hello word';
	}
}
