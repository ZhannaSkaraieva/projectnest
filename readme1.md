ГЕНЕРАЦИЯ  проекта NestJS

1. создание проэкта NestJS

npx @nestjs/cli

2. выбрать менеджер пакетов  —  npm.
3. создается проэкт
├── node_modules
  ├── src
  │   ├── app.controller.spec.ts
  │   ├── app.controller.ts
  │   ├── app.module.ts
  │   ├── app.service.ts
  │   └── main.ts
  ├── test
  │   ├── app.e2e-spec.ts
  │   └── jest-e2e.json
  ├── README.md
  ├── nest-cli.json
  ├── package-lock.json
  ├── package.json
  ├── tsconfig.build.json
  └── tsconfig.json

4. src/app.module.ts: Корневой модуль приложения.
   src/app.controller.ts: Базовый контроллер с одним маршрутом: /. Этот маршрут вернет простое 'Hello World!'сообщение.
   src/main.ts: Точка входа приложения. Она запустит приложение NestJS.

5. запустить проект: npm run start:dev  (!!! это запускать только после docker compose up)

СОЗДАНИЕ  экземпляра PostgreSQL

6. создаю фаил : docker-compose.yml - файл конфигурации, который будет содержать спецификации для запуска контейнера Docker с настройкой PostgreSQL внутри.
7. создать конфигурацию файла: 
version: '3.8'

services:
  db:
    image: postgres:13 //определяет, какой образ Docker использовать
    container_name: postgres-db
    environment: //environmentопределяет переменные среды, передаваемые контейнеру во время инициализации
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: nestdb
    ports:
      - "5432:5432"
    volumes: //опция используется для сохранения данных в файловой системе хоста.
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:

8. Чтобы запустить postgres контейнер, откройте новое окно терминала и выполните следующую команду в главной папке вашего проекта:
docker-compose up
Перед этим запустить OrbSteck

НАСТРОЙКА Prisma

9. инициализация 
npm install -D prisma  - запуск команд и взаимодействие с проектом.
npx prisma init
Создание новый prisma каталог с schema.prisma файлом. Это основной файл конфигурации, содержащий схему вашей базы данных. 
Создание.env файла.

10. Установка переменного окружения
// .env
DATABASE_URL="postgresql://postgres:password@localhost:5432/nestdb?schema=public"

11. Моделирование данных в prisma/prisma.schema
model User {
  id Int @id @default(autoincrement()) //@id. Этот атрибут указывает, что это поле является первичным ключом модели.
  imail String @unique
  name String
  age Int @default(0)
}

12. Перенос базы данных
npx prisma migrate dev --name init
Команда сохранит копию базы и фаил миграции в папке prisma/migrations
Prisma сгенерирует Prisma Client на основе вашей последней схемы.

Запуск просмотра БД 
npx prisma studio

13. Создание службы Prisma. Это абстрагирование API Prisma Client от приложения для дальнейшего переиспользования.
Эта служба, называемая PrismaService, будет отвечать за создание PrismaClient экземпляра и подключение к вашей базе данных.
npx nest generate module prisma
npx nest generate service prisma

14. Import модуль PrismaService в app.modelu.ts

15. Добавление PrismaClientв Users модуль






