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
    const arr = [];
    
    const date1 = new Date(createCalendarioDto.startStr);
    const date2 = new Date(createCalendarioDto.endStr);
    const diffTime = Math.abs(+date2 - +date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; 

    for (let index = 0; index < diffDays; index++) {
      for (const key in createCalendarioDto.franjas) {
        const calendario = await this.calendarioRepository.save({
          ...createCalendarioDto,
          fecha: date1.toString(),
          idFranja: +createCalendarioDto.franjas[key],
          correoPaciente: "asdasdadsd@gmail.com"
        })
        arr.push(calendario);
        
      }
      date1.setDate(date1.getDate() + 1);
    }
    return arr;
    
  }

  findAll(correoProfesional: string) {
    return this.calendarioRepository.findBy({ correoProfesional });
  }

  async remove(id: string) {
    const cita = await this.calendarioRepository.delete({ idCita: id });
    return cita;
  }
}
