import { Injectable } from '@nestjs/common';
import { CreateInviteInput } from './dto/create-invite.input';
import { UpdateInviteInput } from './dto/update-invite.input';
import { PrismaService } from "../prisma.service";

@Injectable()
export class InvitesService {

  constructor(private prisma: PrismaService) {
  }

  create(createInviteInput: CreateInviteInput) {
    return this.prisma.invite.create({data: createInviteInput});
  }

  findAll() {
    return `This action returns all invites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invite`;
  }

  update(id: number, updateInviteInput: UpdateInviteInput) {
    return `This action updates a #${id} invite`;
  }

  remove(id: number) {
    return `This action removes a #${id} invite`;
  }
}
