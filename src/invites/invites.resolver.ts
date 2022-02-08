import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvitesService } from './invites.service';
import { Invite } from './entities/invite.entity';
import { CreateInviteInput } from './dto/create-invite.input';
import { UpdateInviteInput } from './dto/update-invite.input';

@Resolver(() => Invite)
export class InvitesResolver {
  constructor(private readonly invitesService: InvitesService) {}

  @Mutation(() => Invite)
  createInvite(@Args('createInviteInput') createInviteInput: CreateInviteInput) {
    return this.invitesService.create(createInviteInput);
  }

  @Query(() => [Invite], { name: 'invites' })
  findAll() {
    return this.invitesService.findAll();
  }

  @Query(() => Invite, { name: 'invite' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invitesService.findOne(id);
  }

  @Mutation(() => Invite)
  updateInvite(@Args('updateInviteInput') updateInviteInput: UpdateInviteInput) {
    return this.invitesService.update(updateInviteInput.id, updateInviteInput);
  }

  @Mutation(() => Invite)
  removeInvite(@Args('id', { type: () => Int }) id: number) {
    return this.invitesService.remove(id);
  }
}
