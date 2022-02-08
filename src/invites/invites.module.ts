import { Module } from '@nestjs/common';
import { InvitesService } from './invites.service';
import { InvitesResolver } from './invites.resolver';

@Module({
  providers: [InvitesResolver, InvitesService]
})
export class InvitesModule {}