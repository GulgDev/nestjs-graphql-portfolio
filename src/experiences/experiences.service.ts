import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ExperiencesService {
  constructor(private readonly prisma: PrismaService) {}

  async experiences(params: { where?: Prisma.ExperienceWhereInput }) {
    return this.prisma.experience.findMany(params);
  }
}
