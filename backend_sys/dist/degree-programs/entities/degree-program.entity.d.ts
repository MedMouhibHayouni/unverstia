import { AcademicInstitution } from '../../academic-institution/entities/academic-institution.entity';
import { DegreeProgramType } from '../../enums/DegreeProgramType.enum';
import { Major } from '../../majors/entities/major.entity';
import { Speciality } from 'src/specialities/entities/speciality.entity';
import { Student } from '../../students/entities/student.entity';
export declare class DegreeProgram {
    id: number;
    code: string;
    name: string;
    level: DegreeProgramType;
    major: Major;
    speciality: Speciality;
    duration_years: number;
    description: string;
    institution: AcademicInstitution;
    students: Student[];
}
