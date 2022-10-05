import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Guest } from './guests/guest.entity';
import { GuestsHttpModule } from './guests/guests-http.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Koshan123!',
      database: 'rsvp',
      entities: [Guest],
      synchronize: true,
    }),
    GuestsHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
