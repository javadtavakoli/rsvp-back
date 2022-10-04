import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common';
import { Guest } from './guest.entity';
import { GuestsService } from './guests.service';

@Controller('guests')
export class GuestsContoller {
  constructor(private readonly guestsService: GuestsService) {}

  @Get()
  async getGuest(): Promise<Guest[]> {
    return await this.guestsService.findAll();
  }
  @Get('/:phoneNumber')
  async getGuestByPhoneNumber(@Param() param): Promise<Guest> {
    const { phoneNumber } = param;
    return await this.guestsService.findByPhoneNumber(phoneNumber);
  }
  @Put('/:phoneNumber/:decision')
  async changeGuestDecision(@Param() params): Promise<Guest> {
    const { phoneNumber, decision } = params;
    return await this.guestsService.changeGuestDecision(phoneNumber, decision);
  }
  @Delete('/:id')
  async removeGuest(@Param() params): Promise<void> {
    return await this.guestsService.remove(params.id);
  }

  @Post()
  async createGuest(@Body() guest: Guest): Promise<Guest> {
    return await this.guestsService.create(guest);
  }
}
