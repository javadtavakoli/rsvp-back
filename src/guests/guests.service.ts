import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guest, GuestDecision } from './guest.entity';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest)
    private guestsRepository: Repository<Guest>,
  ) {}

  findAll(): Promise<Guest[]> {
    return this.guestsRepository.find();
  }

  findOne(id: number): Promise<Guest> {
    return this.guestsRepository.findOneBy({ id });
  }
  async findByPhoneNumber(phoneNumber: string): Promise<Guest> {
    const [foundedGuest] = await this.guestsRepository.find({
      where: { mobileNumber: phoneNumber },
    });
    return foundedGuest;
  }
  async changeGuestDecision(
    phoneNumber: string,
    decision: GuestDecision,
  ): Promise<Guest> {
    const guest = await this.findByPhoneNumber(phoneNumber);
    guest.accepted = decision;
    const updatedGuest = await this.guestsRepository.update(
      { id: guest.id },
      guest,
    );
    return guest;
  }
  async remove(id: string): Promise<void> {
    await this.guestsRepository.delete(id);
  }
  async create(guest: Guest): Promise<Guest> {
    const result = await this.guestsRepository.save(guest);
    return result;
  }
}
