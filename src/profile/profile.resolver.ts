import { Query, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { Profile } from './models/profile.model.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile)
  async profile() {
    return this.profileService.profile();
  }
}
