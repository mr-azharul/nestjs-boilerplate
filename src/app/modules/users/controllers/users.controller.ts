import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Roles } from '../../../../core/decorators/role.decorators';
import { Role } from '../../../../core/utils/roles';
import { SkipAuth } from '../../../../core/decorators/auth.decorator';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Version('1')
    @SkipAuth()
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.create(createUserDto);
    }

    @Get()
    async findAll() {
        return await this.usersService.findAll();
    }

    @Get(':email')
    async findOne(@Param('email') email: string) {
        return await this.usersService.findOne(email);
    }

    @Get(':id')
    async findOneById(@Param('id') id: string) {
        return await this.usersService.findOneById(+id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return await this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    @Roles(Role.Admin)
    async remove(@Param('id') id: string) {
        return await this.usersService.remove(+id);
    }
}