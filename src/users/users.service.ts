
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}


    private users: CreateUserDto []= [];//создаем массив , по схеме обекта DTO
    async create(createUserDto: CreateUserDto) { //создаем пользователя и добавляем его в массив
        //проверка на то , есть ли User с id уже в DB
        const user = await this.prisma.user.findUnique({
      where: { id: createUserDto.id },
    });
    if (user) {
        throw new Error('User with this ID already exists');
    };
    return this.prisma.user.create({
      data: createUserDto,
    });
    };



    async findAll(): Promise<CreateUserDto[]> {
        const users = await this.prisma.user.findMany();
        return users;
    };
}
  


