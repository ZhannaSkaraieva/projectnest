import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';



//Контроллеры всегда должны быть частью модуля, поэтому включаем controllers массив в @Module() декоратор. 
// Поскольку мы не определили никаких других модулей, кроме root UsersModule, 
// мы будем использовать его для регистрации UsersController:
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}


//прикрепили метаданные к классу модуля с помощью @Module()декоратора, 
// и теперь Nest может легко определить, какие контроллеры необходимо смонтировать.

