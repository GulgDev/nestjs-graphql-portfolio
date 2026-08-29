import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: 'ID'; // see schema.prisma

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  links: string[];
}
