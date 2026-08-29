import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async projects(params: { where?: Prisma.ProjectWhereInput }) {
    return this.prisma.project.findMany(params);
  }
}
