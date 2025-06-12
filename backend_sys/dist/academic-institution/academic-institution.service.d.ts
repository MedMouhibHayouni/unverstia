import { Repository } from 'typeorm';
import { AcademicInstitution } from './entities/academic-institution.entity';
import { CreateAcademicInstitutionDto } from './dto/create-academic-institution.dto';
import { UpdateAcademicInstitutionDto } from './dto/update-academic-institution.dto';
export declare class AcademicInstitutionService {
    private readonly institutionRepository;
    constructor(institutionRepository: Repository<AcademicInstitution>);
    create(createDto: CreateAcademicInstitutionDto): Promise<AcademicInstitution>;
    findAll(): Promise<AcademicInstitution[]>;
    findOne(id: number): Promise<AcademicInstitution | null>;
    update(id: number, updateDto: UpdateAcademicInstitutionDto): Promise<AcademicInstitution | null>;
    remove(id: number): Promise<boolean>;
}
