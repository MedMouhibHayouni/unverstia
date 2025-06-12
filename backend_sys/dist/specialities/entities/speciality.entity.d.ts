import { Major } from '../../majors/entities/major.entity';
import { DegreeProgram } from '../../degree-programs/entities/degree-program.entity';
export declare class Speciality {
    id: number;
    name: string;
    code: string;
    major: Major;
    degreePrograms: DegreeProgram[];
    description: string;
}
