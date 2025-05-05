//схема DTO (Data Transfer Object). DTO — это объект, который определяет, как данные должны дальше отправляться по сети.
//типизует данные

export class CreateUserDto { //создаем класс
    id: number;
    email: string;
    name: string;
    age: number;
  
}

//Он имеет только три основных свойства. 
// После этого мы можем использовать вновь созданный DTO внутри UsersController: