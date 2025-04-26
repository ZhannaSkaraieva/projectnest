//Контроллеры отвечают за обработку входящих запросов и отправку ответов клиенту.

import { Controller,Post,HttpCode,Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';

@Controller('users')
  //путь маршрута включает любую строку пути, указанную в декораторе метода ('users')
  //Например, если префикс контроллера — userss, а декоратор метода — @Get('name'),
  // то результирующий маршрут будет GET /users/name.
  
export class UsersController {

//Nest сам подставляет UsersService в контроллер для дальнейшего исспользования 
constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201) //Код статуса запроса
  async create(@Body() createUserDto: CreateUserDto) {
    //@Body - метод контроллера, который получает все данные ,которые 
    //были полученны в запросе пользователя и передает их в servise для дальнейшего
    //соддания пользователя на основе метода create
     return this.usersService.create(createUserDto);; //прописываем метод create в users.service
  }
  
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}


