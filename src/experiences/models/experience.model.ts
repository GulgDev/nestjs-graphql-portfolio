import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => ID)
  id: number;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startedAt: Date;

  @Field(() => Date, { nullable: true })
  endedAt?: Date | null;

  @Field()
  achievements: string;
}
