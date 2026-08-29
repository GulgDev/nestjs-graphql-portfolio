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

  for (const skill of [
    'Web-разработка',
    'Backend-разработка',
    'Низкоуровневое программирование',
    'Компьютерные науки',
    'Решение задач',
    'Английский язык',
  ])
    await prisma.skill.upsert({
      where: { profileId_name: { profileId, name: skill } },
      update: {},
      create: { profileId, name: skill },
    });

  for (const experience of [
    {
      company: 'Без трудоустройства',
      position: 'Программист-любитель',
      startedAt: new Date('2016-01'),
      achievements:
        'Набрался опыта, прокачал скиллы, создал интересные с инженерной точки зрения пет-проекты, контрибьютил в крупные open-source проекты.',
    },
    {
      company: 'Фриланс',
      position: 'Fullstack-разработчик',
      startedAt: new Date('2026-01'),
      endedAt: new Date('2026-04'),
      achievements:
        'Успешно занимался дизайном, адаптивной вёрсткой, интеграцией с CMS, деплоем.',
    },
    {
      company: 'АНПОО "Колледж Цифровых Технологий"',
      position: 'Преподавал по курсу "Введение в программирование"',
      startedAt: new Date('2026-02'),
      endedAt: new Date('2026-05'),
      achievements:
        'Научил группу новичков основам программирования на JavaScript.',
    },
  ])
    await prisma.experience.upsert({
      where: { profileId_company: { profileId, company: experience.company } },
      update: experience,
      create: { profileId, ...experience },
    });
} finally {
  await app.close();
}
