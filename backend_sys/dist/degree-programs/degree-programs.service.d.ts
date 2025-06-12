import { Repository } from 'typeorm';
import { DegreeProgram } from './entities/degree-program.entity';
import { CreateDegreeProgramDto } from './dto/create-degree-program.dto';
import { UpdateDegreeProgramDto } from './dto/update-degree-program.dto';
import { Major } from '../majors/entities/major.entity';
import { Speciality } from '../specialities/entities/speciality.entity';
import { AcademicInstitution } from '../academic-institution/entities/academic-institution.entity';
export declare class DegreeProgramsService {
    private readonly repository;
    private readonly majorRepository;
    private readonly specialityRepository;
    private readonly academicInstitutionRepository;
    constructor(repository: Repository<DegreeProgram>, majorRepository: Repository<Major>, specialityRepository: Repository<Speciality>, academicInstitutionRepository: Repository<AcademicInstitution>);
    create(createDegreeProgramDto: CreateDegreeProgramDto): Promise<DegreeProgram>;
    findAll(): Promise<DegreeProgram[]>;
    findOne(id: number): Promise<DegreeProgram | null>;
    update(id: number, updateDegreeProgramDto: UpdateDegreeProgramDto): Promise<DegreeProgram | null>;
    remove(id: number): Promise<boolean>;
}
