import { CreateUserDto } from '../dto/user.dto';

export interface IUserService {
	createUser(data: CreateUserDto): Promise<IUserPublic>;
}

export interface IUserPublic {
	id: string;
	userName: string;
}

export interface IUserSchema {
	userName: string;
	password: string;
}
