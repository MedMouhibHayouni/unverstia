import { DegreeProgramType } from 'src/enums/DegreeProgramType.enum';
export declare class CreateDegreeProgramDto {
    name: string;
    code: string;
    level: DegreeProgramType;
    description: string;
    duration_years: number;
    major_id: number;
    speciality_id: number;
    institution_id: number;
}
