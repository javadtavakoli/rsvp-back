import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/javad/:number')
  getGuest(@Param() params): string {
    return params.number;
  }
}
