import { Module } from '@nestjs/common';
import { CalendarioService } from './calendario.service';
import { CalendarioController } from './calendario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calendario } from './entities/calendario.entity';

@Module({
  controllers: [CalendarioController],
  providers: [CalendarioService],
  imports: [TypeOrmModule.forFeature([
    Calendario
  ])]
})
export class CalendarioModule {}
