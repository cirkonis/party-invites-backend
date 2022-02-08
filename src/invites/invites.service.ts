import { Injectable } from '@nestjs/common';
import { CreateInviteInput } from './dto/create-invite.input';
import { UpdateInviteInput } from './dto/update-invite.input';

@Injectable()
export class InvitesService {
  create(createInviteInput: CreateInviteInput) {
    return 'This action adds a new invite';
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
