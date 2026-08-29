import { NestFactory } from '@nestjs/core';
import { Singleton } from '../src/generated/prisma/client.js';
import { PrismaModule } from '../src/prisma/prisma.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

const app = await NestFactory.createApplicationContext(PrismaModule);

try {
  const prisma = app.get(PrismaService);

  const { id: profileId } = await prisma.profile.upsert({
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

  await prisma.skill.createMany({
    data: [
      'Web-разработка',
      'Backend-разработка',
      'Низкоуровневое программирование',
      'Компьютерные науки',
      'Решение задач',
      'Английский язык',
    ].map(name => ({ profileId, name })),
  });
} finally {
  await app.close();
}
