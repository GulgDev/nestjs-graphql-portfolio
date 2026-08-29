import { Module } from '@nestjs/common';
import { SkillsModule } from '../skills/skills.module.js';
import { ProfileService } from './profile.service.js';
import { ProfileResolver } from './profile.resolver.js';

@Module({
  imports: [SkillsModule],
  providers: [ProfileResolver, ProfileService],
})
export class ProfileModule {}
