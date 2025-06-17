// src/teachers/teachers.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private readonly repository: Repository<Teacher>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const teacher = this.repository.create(createTeacherDto);
    return await this.repository.save(teacher);
  }

  async findAll(): Promise<Teacher[]> {
    return await this.repository.find({
      relations: ['user'], // ajoute 'department' ici si tu ajoutes la relation dans l'entité
    });
  }

  async findOne(id: number): Promise<Teacher> {
    const teacher = await this.repository.findOneBy({ id });
    if (!teacher) throw new NotFoundException(`Teacher #${id} not found`);
    return teacher;
  }

  async findOneByUserId(user_id: number): Promise<Teacher | null> {
    return await this.repository.findOneBy({ user_id });
  }

  async update(
    id: number,
    updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    const teacher = await this.findOne(id);
    Object.assign(teacher, updateTeacherDto);
    return await this.repository.save(teacher);
  }

  async remove(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Teacher #${id} not found`);
    }
  }
}
