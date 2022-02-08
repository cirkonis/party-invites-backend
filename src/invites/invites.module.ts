import { Module } from '@nestjs/common';
import { InvitesService } from './invites.service';
import { InvitesResolver } from './invites.resolver';
import { PrismaService } from "../prisma.service";

@Module({
  providers: [InvitesResolver, InvitesService, PrismaService]
})
export class InvitesModule {}
