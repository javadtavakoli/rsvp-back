import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guest } from './guest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guest])],
  exports: [TypeOrmModule]
})
export class GuestsModule {}