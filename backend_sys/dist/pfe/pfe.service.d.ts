import { Repository } from 'typeorm';
import { PfeResponseDto } from './dto/pfe-response.dto';
import { CreatePfeDto } from './dto/create-pfe.dto';
import { Pfe } from './entities/pfe.entity';
import { UpdatePfeDto } from './dto/update-pfe.dto';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
export declare class PfeService {
    private readonly pfeRepo;
    private readonly studentRepo;
    private readonly teacherRepo;
    constructor(pfeRepo: Repository<Pfe>, studentRepo: Repository<Student>, teacherRepo: Repository<Teacher>);
    create(dto: CreatePfeDto): Promise<Pfe>;
    findAll(): Promise<PfeResponseDto[]>;
    findOne(id: number): Promise<PfeResponseDto>;
    update(id: number, dto: UpdatePfeDto): Promise<PfeResponseDto>;
    delete(id: number): Promise<void>;
    approvePfe(id: number): Promise<PfeResponseDto>;
    rejectPfe(id: number): Promise<PfeResponseDto>;
    getBySupervisor(supervisorId: number): Promise<PfeResponseDto[]>;
}
