import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInviteInput {
  @Field()
  name: string;

  @Field()
  secretCode: string;

  @Field( { nullable: true })
  rsvp: boolean;
}
