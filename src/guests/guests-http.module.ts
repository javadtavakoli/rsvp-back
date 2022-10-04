import { Module } from '@nestjs/common';
import { GuestsContoller } from './guests.controller';
import { GuestsModule } from './guests.module';
import { GuestsService } from './guests.service';

@Module({
  imports: [GuestsModule],
  providers: [GuestsService],
  controllers: [GuestsContoller]
})
export class GuestsHttpModule {}
