import { PartialType } from '@nestjs/mapped-types';
import { CreateFranjaDto } from './create-franja.dto';

export class UpdateFranjaDto extends PartialType(CreateFranjaDto) {}
