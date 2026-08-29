import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Profile, Singleton } from '../generated/prisma/client.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Query the profile data from the database.
   *
   * Because `Profile` is a singleton, this method takes no parameters. Can be
   * extended later to support multiple profiles.
   */
  async profile(): Promise<Profile> {
    return this.prisma.profile.findUniqueOrThrow({
      where: {
        id: Singleton.ID,
      },
    });
  }
}
