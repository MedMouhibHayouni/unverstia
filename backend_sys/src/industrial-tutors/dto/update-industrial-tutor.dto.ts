import { PartialType } from '@nestjs/swagger';
import { CreateIndustrialTutorDto } from './create-industrial-tutor.dto';

export class UpdateIndustrialTutorDto extends PartialType(
  CreateIndustrialTutorDto,
) {}
