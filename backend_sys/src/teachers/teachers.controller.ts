// src/teachers/teachers.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherResponseDto } from './dto/teacher-response.dto';
import { plainToClass } from 'class-transformer';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  async create(
    @Body() createTeacherDto: CreateTeacherDto,
  ): Promise<TeacherResponseDto> {
    const teacher = await this.teachersService.create(createTeacherDto);
    return plainToClass(TeacherResponseDto, teacher, {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  async findAll(): Promise<TeacherResponseDto[]> {
    const teachers = await this.teachersService.findAll();
    return teachers.map((teacher) =>
      plainToClass(TeacherResponseDto, teacher, {
        excludeExtraneousValues: true,
      }),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TeacherResponseDto> {
    const teacher = await this.teachersService.findOne(+id);
    return plainToClass(TeacherResponseDto, teacher, {
      excludeExtraneousValues: true,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ): Promise<TeacherResponseDto> {
    const teacher = await this.teachersService.update(+id, updateTeacherDto);
    return plainToClass(TeacherResponseDto, teacher, {
      excludeExtraneousValues: true,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.teachersService.remove(+id);
  }
}
