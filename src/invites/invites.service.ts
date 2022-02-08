import { Injectable } from '@nestjs/common';
import { CreateInviteInput } from './dto/create-invite.input';
import { UpdateInviteInput } from './dto/update-invite.input';
import { PrismaService } from "../prisma.service";
import { Invite } from "./entities/invite.entity";

@Injectable()
export class InvitesService {

  constructor(private prisma: PrismaService) {
  }

  create(createInviteInput: CreateInviteInput): Promise<Invite> {
    return this.prisma.invite.create({data: createInviteInput});
  }

  async findAll(): Promise<Invite[]> {
    return await this.prisma.invite.findMany();
  }

  async findOne(id: number): Promise<Invite>{
    return await this.prisma.invite.findUnique({where: {id: id}});
  }

  async update(id: number, updateInviteInput: UpdateInviteInput): Promise<Invite> {
    return await this.prisma.invite.update({where: {id: id}, data: updateInviteInput });
  }

  async remove(id: number): Promise<Invite> {
     return await this.prisma.invite.delete({where: {id:id}});
  }
}
