import { NestFactory } from '@nestjs/core';
import { Singleton } from '../src/generated/prisma/client.js';
import { PrismaModule } from '../src/prisma/prisma.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

const app = await NestFactory.createApplicationContext(PrismaModule);

try {
  const prisma = app.get(PrismaService);

  await prisma.profile.upsert({
    where: {
      id: Singleton.ID,
    },
    update: {},
    create: {
      id: Singleton.ID,
      name: 'Шутюк Еремей Юлианович',
      description:
        'Fullstack-разработчик с десятилетним опытом. Люблю нестандартные задачи.',
      links: ['https://github.com/GulgDev'],
    },
  });
} finally {
  await app.close();
}
