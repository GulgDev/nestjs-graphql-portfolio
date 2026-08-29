import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { ProfileService } from './profile.service.js';
import { ProfileResolver } from './profile.resolver.js';

@Module({
  imports: [PrismaModule],
  providers: [ProfileResolver, ProfileService],
})
export class ProfileModule {}
