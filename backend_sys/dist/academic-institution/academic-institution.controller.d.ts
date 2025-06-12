import { AcademicInstitutionService } from './academic-institution.service';
import { CreateAcademicInstitutionDto } from './dto/create-academic-institution.dto';
import { UpdateAcademicInstitutionDto } from './dto/update-academic-institution.dto';
export declare class AcademicInstitutionController {
    private readonly academicInstitutionService;
    constructor(academicInstitutionService: AcademicInstitutionService);
    create(createDto: CreateAcademicInstitutionDto): Promise<import("./entities/academic-institution.entity").AcademicInstitution>;
    findAll(): Promise<import("./entities/academic-institution.entity").AcademicInstitution[]>;
    findOne(id: string): Promise<import("./entities/academic-institution.entity").AcademicInstitution>;
    update(id: string, updateDto: UpdateAcademicInstitutionDto): Promise<import("./entities/academic-institution.entity").AcademicInstitution>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
