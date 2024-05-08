import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Repository } from "typeorm";
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>, private configService: ConfigService
    ) { }

    async create(createUserDto: CreateUserDto) {
        createUserDto["password"] = await bcrypt.hash(createUserDto["password"], this.configService.get("GENERAL.salt_or_round"));
        const newUser = this.userRepository.create(createUserDto);
        return await this.userRepository.save(newUser);
    }

    async findAll() {
        return await this.userRepository.find();
    }

    async findOne(email: string) {
        return await this.userRepository.findOne({ where: { email } });
    }

    async findOneById(id: number) {
        return await this.userRepository.findOne({ where: { id } });
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return await this.userRepository.update({ id }, updateUserDto);
    }

    async remove(id: number) {
        return await this.userRepository.delete({ id });
    }
}