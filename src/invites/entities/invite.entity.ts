import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Invite {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  secretCode: string;

  @Field( { nullable: true })
  rsvp: boolean;
}
