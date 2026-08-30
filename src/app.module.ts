import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module.js';
import { ProfileModule } from './profile/profile.module.js';
import { SkillsModule } from './skills/skills.module.js';
import { ExperiencesModule } from './experiences/experiences.module.js';
import { ProjectsModule } from './projects/projects.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: process.env.NO_WRITE
        ? true
        : join(process.cwd(), 'src/schema.gql'),
      graphiql: false,
      introspection: true,
      path: '/',
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),

    PrismaModule,

    ProfileModule,
    SkillsModule,
    ExperiencesModule,
    ProjectsModule,
  ],
})
export class AppModule {}
