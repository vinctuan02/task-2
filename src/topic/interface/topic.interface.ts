export interface ISchemaTopicSave {
	parentId?: string | null;
	code: string;
	description?: string | null;
	note?: string | null;
	codeSort: string;
}

export interface ISchemaTopic {
	id: string;
	parentId?: string | null;
	code: string;
	description?: string | null;
	note?: string | null;
	codeSort: string;
}
