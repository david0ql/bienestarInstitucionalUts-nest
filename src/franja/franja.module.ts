import { Module } from '@nestjs/common';
import { FranjaService } from './franja.service';
import { FranjaController } from './franja.controller';

@Module({
  controllers: [FranjaController],
  providers: [FranjaService]
})
export class FranjaModule {}
