import { OrderStatus } from '../enum/order.enum';

export interface ISchemaOrderSave {
	content: string | null;
	code: string;
	codeSort: string;
	note: string | null;
	deadline: Date;
	userCreatorId: string;
	status: OrderStatus;
	topicId: string;
}
