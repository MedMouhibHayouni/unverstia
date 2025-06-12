import { Department } from '../../departments/entities/department.entity';
import { Speciality } from '../../specialities/entities/speciality.entity';
import { DegreeProgram } from '../../degree-programs/entities/degree-program.entity';
export declare class Major {
    id: number;
    name: string;
    department: Department;
    specialities: Speciality[];
    degreePrograms: DegreeProgram[];
    description: string;
}
