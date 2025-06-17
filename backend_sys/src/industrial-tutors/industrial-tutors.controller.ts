import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IndustrialTutorsService } from './industrial-tutors.service';
import { CreateIndustrialTutorDto } from './dto/create-industrial-tutor.dto';
import { UpdateIndustrialTutorDto } from './dto/update-industrial-tutor.dto';

@Controller('industrial-tutors')
export class IndustrialTutorsController {
  constructor(
    private readonly industrialTutorsService: IndustrialTutorsService,
  ) {}

  @Post()
  create(@Body() createIndustrialTutorDto: CreateIndustrialTutorDto) {
    return this.industrialTutorsService.create(createIndustrialTutorDto);
  }

  @Get()
  findAll() {
    return this.industrialTutorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.industrialTutorsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIndustrialTutorDto: UpdateIndustrialTutorDto,
  ) {
    return this.industrialTutorsService.update(+id, updateIndustrialTutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.industrialTutorsService.remove(+id);
  }
}
