import { CreateInviteInput } from './create-invite.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInviteInput extends PartialType(CreateInviteInput) {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field()
  name: string;

  @Field()
  secretCode: string;

  @Field( { nullable: true })
  rsvp: boolean;
}
