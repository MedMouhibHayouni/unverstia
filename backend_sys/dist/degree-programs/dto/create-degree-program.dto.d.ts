import { DegreeProgramType } from 'src/enums/DegreeProgramType.enum';
export declare class CreateDegreeProgramDto {
    name: string;
    code: string;
    degree_type: DegreeProgramType;
    description: string;
    level: DegreeProgramType;
    duration: number;
    major_id: number;
    speciality_id: number;
    institution_id: number;
}
