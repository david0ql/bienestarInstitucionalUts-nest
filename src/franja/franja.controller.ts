import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FranjaService } from './franja.service';
import { CreateFranjaDto } from './dto/create-franja.dto';
import { UpdateFranjaDto } from './dto/update-franja.dto';

@Controller('franja')
export class FranjaController {
  constructor(private readonly franjaService: FranjaService) {}

  @Post()
  create(@Body() createFranjaDto: CreateFranjaDto) {
    return this.franjaService.create(createFranjaDto);
  }

  @Get()
  findAll() {
    return this.franjaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.franjaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFranjaDto: UpdateFranjaDto) {
    return this.franjaService.update(+id, updateFranjaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.franjaService.remove(+id);
  }
}
