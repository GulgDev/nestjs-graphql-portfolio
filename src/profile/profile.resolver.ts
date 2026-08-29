import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SkillsService } from '../skills/skills.service.js';
import { ProfileService } from './profile.service.js';
import { Profile } from './models/profile.model.js';
import { Skill } from '../skills/models/skill.model.js';
import { Experience } from '../experiences/models/experience.model.js';
import { ExperiencesService } from '../experiences/experiences.service.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillsService: SkillsService,
    private readonly experiencesService: ExperiencesService,
  ) {}

  @Query(() => Profile)
  async profile() {
    return this.profileService.profile();
  }

  @ResolveField(() => [Skill])
  async skills(@Parent() profile: Profile) {
    return this.skillsService.skills({ where: { profileId: profile.id } });
  }

  @ResolveField(() => [Experience])
  async experience(@Parent() profile: Profile) {
    return this.experiencesService.experiences({
      where: { profileId: profile.id },
    });
  }
}
