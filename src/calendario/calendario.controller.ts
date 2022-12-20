import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CalendarioService } from './calendario.service';
import { CreateCalendarioDto } from './dto/create-calendario.dto';

@Controller('calendario')
export class CalendarioController {
  constructor(private readonly calendarioService: CalendarioService) {}

  @Post()
  create(@Body() createCalendarioDto: CreateCalendarioDto) {
    return this.calendarioService.create(createCalendarioDto);
  }

  @Get(':correoProfesional')
  findAll(@Param('correoProfesional') correoProfesional: string) {
    return this.calendarioService.findAll(correoProfesional);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calendarioService.remove(id);
  }
}
