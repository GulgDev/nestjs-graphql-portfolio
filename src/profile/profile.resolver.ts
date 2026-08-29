import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SkillsService } from '../skills/skills.service.js';
import { ProfileService } from './profile.service.js';
import { Profile } from './models/profile.model.js';
import { Skill } from '../skills/models/skill.model.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillsService: SkillsService,
  ) {}

  @Query(() => Profile)
  async profile() {
    return this.profileService.profile();
  }

  @ResolveField(() => [Skill])
  async skills(@Parent() profile: Profile) {
    return this.skillsService.skills({ where: { profileId: profile.id } });
  }
}
