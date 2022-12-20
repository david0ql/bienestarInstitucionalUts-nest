import { Injectable } from '@nestjs/common';
import { CreateFranjaDto } from './dto/create-franja.dto';
import { UpdateFranjaDto } from './dto/update-franja.dto';

@Injectable()
export class FranjaService {
  create(createFranjaDto: CreateFranjaDto) {
    return 'This action adds a new franja';
  }

  findAll() {
    return `This action returns all franja`;
  }

  findOne(id: number) {
    return `This action returns a #${id} franja`;
  }

  update(id: number, updateFranjaDto: UpdateFranjaDto) {
    return `This action updates a #${id} franja`;
  }

  remove(id: number) {
    return `This action removes a #${id} franja`;
  }
}
