import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SkillsService } from '../skills/skills.service.js';
import { ProfileService } from './profile.service.js';
import { ExperiencesService } from '../experiences/experiences.service.js';
import { ProjectsService } from '../projects/projects.service.js';
import { Profile } from './models/profile.model.js';
import { Skill } from '../skills/models/skill.model.js';
import { Experience } from '../experiences/models/experience.model.js';
import { Project } from '../projects/models/project.model.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillsService: SkillsService,
    private readonly experiencesService: ExperiencesService,
    private readonly projectsService: ProjectsService,
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

  @ResolveField(() => [Project])
  async projects(@Parent() profile: Profile) {
    return this.projectsService.projects({
      where: { profileId: profile.id },
    });
  }
}
