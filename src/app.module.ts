import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarioModule } from './calendario/calendario.module';
import { FranjaModule } from './franja/franja.module';
import { Calendario } from './calendario/entities/calendario.entity';

@Module({
  imports: [
    CalendarioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'bienestar',
      entities: [Calendario],
      synchronize: true,
    }),
    FranjaModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
