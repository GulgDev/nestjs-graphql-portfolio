import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class SkillsService {
  constructor(private readonly prisma: PrismaService) {}

  async skills(params: { where?: Prisma.SkillWhereInput }) {
    return this.prisma.skill.findMany(params);
  }
}
