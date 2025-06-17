// src/pfe/services/pfe.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PfeResponseDto } from './dto/pfe-response.dto';
import { CreatePfeDto } from './dto/create-pfe.dto';
import { Pfe } from './entities/pfe.entity';
import { PfeMapper } from './mappers/pfe.mapper';
import { UpdatePfeDto } from './dto/update-pfe.dto';
import { PfeStatus } from 'src/enums/pfe-status.enum';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { format } from 'date-fns'; // Add date-fns for date formatting

@Injectable()
export class PfeService {
  constructor(
    @InjectRepository(Pfe) private readonly pfeRepo: Repository<Pfe>,
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
    @InjectRepository(Teacher)
    private readonly teacherRepo: Repository<Teacher>,
  ) {}

  async create(dto: CreatePfeDto): Promise<Pfe> {
    const student = await this.studentRepo.findOne({
      where: { user_id: dto.student_id },
      relations: ['user'],
    });

    if (!student) throw new NotFoundException('Étudiant non trouvé');

    const supervisor = dto.supervisor_id
      ? await this.teacherRepo.findOne({
          where: { user_id: dto.supervisor_id },
          relations: ['user'],
        })
      : null;

    // Explicitly create the PFE entity with proper date handling
    const pfe = this.pfeRepo.create({
      title: dto.title,
      description: dto.description,
      student,
      supervisor,
      submission_date: dto.submission_date
        ? new Date(dto.submission_date)
        : null,
      defense_date: dto.defense_date ? new Date(dto.defense_date) : null,
    });

    return await this.pfeRepo.save(pfe);
  }

  async findAll(): Promise<PfeResponseDto[]> {
    const pfes = await this.pfeRepo.find({
      relations: [
        'student',
        'student.user',
        'supervisor',
        'supervisor.user',
        'documents',
        'evaluations',
      ],
    });
    return pfes.map(PfeMapper.toDto);
  }

  async findOne(id: number): Promise<PfeResponseDto> {
    const pfe = await this.pfeRepo.findOne({
      where: { id },
      relations: [
        'student',
        'student.user',
        'supervisor',
        'supervisor.user',
        'documents',
        'evaluations',
      ],
    });
    if (!pfe) throw new NotFoundException('PFE non trouvé');
    return PfeMapper.toDto(pfe);
  }

  async update(id: number, dto: UpdatePfeDto): Promise<PfeResponseDto> {
    const pfe = await this.pfeRepo.findOneBy({ id });
    if (!pfe) throw new NotFoundException('PFE non trouvé');
    Object.assign(pfe, dto);
    await this.pfeRepo.save(pfe);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.pfeRepo.delete(id);
  }

  async approvePfe(id: number): Promise<PfeResponseDto> {
    const pfe = await this.pfeRepo.findOneBy({ id });
    if (!pfe) throw new NotFoundException('PFE non trouvé');
    pfe.status = PfeStatus.APPROVED; // Utilisation de l'enum
    await this.pfeRepo.save(pfe);
    return this.findOne(id);
  }

  async rejectPfe(id: number): Promise<PfeResponseDto> {
    const pfe = await this.pfeRepo.findOneBy({ id });
    if (!pfe) throw new NotFoundException('PFE non trouvé');
    pfe.status = PfeStatus.REJECTED; // Utilisation de l'enum
    await this.pfeRepo.save(pfe);
    return this.findOne(id);
  }

  async getBySupervisor(supervisorId: number): Promise<PfeResponseDto[]> {
    const pfes = await this.pfeRepo.find({
      where: { supervisor: { user_id: supervisorId } },
      relations: [
        'student',
        'student.user',
        'supervisor',
        'supervisor.user',
        'documents',
        'evaluations',
      ],
    });

    return pfes.map((pfe) => ({
      ...PfeMapper.toDto(pfe),
      // Ensure dates are properly formatted
      submission_date: pfe.submission_date
        ? format(pfe.submission_date, 'dd/MM/yyyy')
        : undefined,
      defense_date: pfe.defense_date
        ? format(pfe.defense_date, 'dd/MM/yyyy')
        : undefined,
    }));
  }
}
