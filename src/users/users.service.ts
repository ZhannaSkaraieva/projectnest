
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {

    private users: CreateUserDto []= [];//создаем массив , по схеме обекта DTO
    create(createUserDto: CreateUserDto) { //создаем пользователя и добавляем его в массив
        //проверка на то , есть ли User с id уже в массиве
        const user = this.users.some(user => user.id === createUserDto.id);
    if (user) {
        return Error('User with this ID already exists');
    };
    this.users.push(createUserDto);
    return createUserDto;
  }
  }

