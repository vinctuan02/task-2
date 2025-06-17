import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/auth/dto/auth.dto';
import { hashPassword } from 'src/common/function/common.funtion';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import {
	IUserPublic,
	IUserSchema,
	IUserService,
} from './interface/user.interface';

@Injectable()
export class UserService implements IUserService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
	) {}

	async createUser(data: CreateUserDto): Promise<IUserPublic> {
		data.password = await hashPassword(data.password);
		const newUser = await this.saveToDatabase(data);
		const { password, ...otherData } = newUser;
		return otherData;
	}

	async findOne(data: LoginDto): Promise<UserEntity> {
		const { userName } = data;

		const user = await this.userRepository.findOne({
			where: { userName },
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		return user;
	}

	async saveToDatabase(data: IUserSchema): Promise<UserEntity> {
		const user = this.userRepository.create(data);
		return await this.userRepository.save(user);
	}
}
