import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCalendarioDto } from './dto/create-calendario.dto';
import { Calendario } from './entities/calendario.entity';

@Injectable()
export class CalendarioService {

  constructor(
    @InjectRepository(Calendario)
    private calendarioRepository: Repository<Calendario>,
  ) {}

  async create(createCalendarioDto: CreateCalendarioDto) {
    const entrada = await this.calendarioRepository.save(createCalendarioDto);
    return entrada;
  }

  findAll(correoProfesional: string) {
    return this.calendarioRepository.findBy({ correoProfesional });
  }

  async remove(id: string) {
    const cita = await this.calendarioRepository.delete({ idCita: id });
    return cita;
  }
}
