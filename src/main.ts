//Файл входа приложения, который использует основную функцию NestFactoryдля создания экземпляра приложения Nest.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
require('dotenv').config(); // загрузка переменных окружения из .env файла
//npm install dotenv => ".env"


//запускаем HTTP-прослушиватель, который позволяет приложению ожидать входящие HTTP-запросы.
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
