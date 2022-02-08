import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvitesModule } from './invites/invites.module';
import { InvitesService } from "./invites/invites.service";
import { InvitesResolver } from "./invites/invites.resolver";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [InvitesModule,
    GraphQLModule.forRoot({ autoSchemaFile: 'src/invites/schema.gql',}),
  ],
  controllers: [AppController],
  providers: [AppService, InvitesService, InvitesResolver, InvitesModule],
})
export class AppModule {}
