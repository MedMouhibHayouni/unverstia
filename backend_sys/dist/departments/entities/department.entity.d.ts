import { Major } from '../../majors/entities/major.entity';
import { AcademicInstitution } from '../../academic-institution/entities/academic-institution.entity';
export declare class Department {
    id: number;
    name: string;
    code: string;
    academicInstitution: AcademicInstitution;
    majors: Major[];
}
